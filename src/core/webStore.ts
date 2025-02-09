import { ReadStream } from "fs";

export interface WebStore {
    download(extensionId: string): Promise<ReadStream>;
}
