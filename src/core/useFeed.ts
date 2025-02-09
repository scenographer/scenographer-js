import { BrowserFeed } from "./browserFeed";
import { BrowserStorage } from "./browserStorage";
import { WebStore } from "./webStore";

export function useFeed(storage: BrowserStorage, store: WebStore): BrowserFeed {
    return new BrowserFeed(storage, store);
}
