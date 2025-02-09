import path from "path";

const defaultFolder = ".browser";
const extensionsFolder = "Extensions";

export class BrowserStorage {
    private _baseDirectory: string;

    public get baseDirectory(): string {
        return this._baseDirectory;
    }

    private _extensionsDirectory: string;

    public get extensionsDirectory(): string {
        return this._extensionsDirectory;
    }

    constructor(baseDirectory?: string) {
        this._baseDirectory = baseDirectory ?? path.join(process.cwd(), defaultFolder);
        this._extensionsDirectory = path.join(this._baseDirectory, extensionsFolder);
    }
}
