import fs from "fs";
import path from "path";
import { Readable } from "stream";
import unzipper from "unzipper";
import { CRXtoZIP } from "../utils/crx-to-zip";
import { stream2buffer } from "../utils/stream-to-buffer";
import { BrowserStorage } from "./browserStorage";
import { WebStore } from "./webStore";

export class BrowserFeed {
    constructor(
        private _storage: BrowserStorage,
        private _store: WebStore) { }

    public async installExtension(extensionId: string): Promise<void> {
        const destination = path.join(this._storage.extensionsDirectory, extensionId);

        if (fs.existsSync(destination)) return;

        const download = await this._store.download(extensionId);

        const buffer = await stream2buffer(download);
        const zip = CRXtoZIP(buffer);
        const zipStream = Readable.from(zip as Buffer);

        await zipStream.pipe(unzipper.Extract({ path: destination })).promise();
    }
}
