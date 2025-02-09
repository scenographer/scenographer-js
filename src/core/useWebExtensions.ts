import fs from "fs";
import path from "path";
import { BrowserContextOptions, LaunchOptions } from "playwright-core";
import { defaultStorage } from "./defaultStorage";

export function useWebExtensions(options: LaunchOptions, sourceDirectory?: string): BrowserContextOptions | LaunchOptions {
    const separator = ",";

    sourceDirectory = sourceDirectory ?? defaultStorage.extensionsDirectory;

    options = Object.assign({}, options);

    options.headless = false;
    options.args = options.args ?? [];

    if (fs.existsSync(sourceDirectory)) {
        const extensions = fs.readdirSync(sourceDirectory, { withFileTypes: true })
            .filter(f => f.isDirectory())
            .map(f => f.name);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const extensionsPath = extensions.map(ext => path.join(sourceDirectory!, ext));
        const extensionsList = extensionsPath.join(separator);

        options.args = [
            ...options.args,
            `--load-extension=${extensionsList}`,
            `--disable-extensions-except=${extensionsList}`
        ];
    }

    return options;
}
