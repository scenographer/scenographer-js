import fs, { ReadStream } from "fs";
import path from "path";
import { WebStore } from "../core/webStore";

export class LocalWebStore implements WebStore {
    private _baseDirectory: string;

    constructor(baseDirectory?: string) {
        this._baseDirectory = baseDirectory ?? path.join(process.cwd(), ".webextensions");
    }

    public async download(extensionId: string): Promise<ReadStream> {
        const filename = `${extensionId}.crx`;
        const filePath = path.join(this._baseDirectory, filename);

        return fs.createReadStream(filePath);
    }
}
