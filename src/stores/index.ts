import { WebStore } from "../core/webStore";
import { ChromeWebStore } from "./chrome";
import { LocalWebStore } from "./local";

export const chromeStore: WebStore = new ChromeWebStore();
export const localStore: WebStore = new LocalWebStore();
