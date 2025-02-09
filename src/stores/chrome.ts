import axios from "axios";
import { ReadStream } from "fs";
import { WebStore } from "../core/webStore";

export class ChromeWebStore implements WebStore {
    public async download(extensionId: string): Promise<ReadStream> {
        const prodversion = "49.0";
        const url = `https://clients2.google.com/service/update2/crx?response=redirect&prodversion=${prodversion}&acceptformat=crx3&x=id%3D${extensionId}%26installsource%3Dondemand%26uc`;

        const res = await axios.get(url, { responseType: "stream" });

        return res.data;
    }
}
