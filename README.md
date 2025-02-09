# Scenographer

[![Build](https://github.com/scenographer/scenographer-js/actions/workflows/ci.yml/badge.svg)](https://github.com/scenographer/scenographer-js/actions/workflows/ci.yml)

WebExtension for Playwright for Node.js

## API Reference

```typescript
import { chromium } from "playwright";
import { chromeStore, defaultStorage, useFeed, useWebExtensions } from "scenographer";

// Installing AdBlock
// https://chrome.google.com/webstore/detail/gighmmpiobklfepjocnamgkkbiglidom

await useFeed(defaultStorage, chromeStore).installExtension("gighmmpiobklfepjocnamgkkbiglidom");

const options = useWebExtensions();
const browser = await chromium.launchPersistentContext(defaultStorage.baseDirectory, options);

const page = browser.pages[0];
await page.goto("chrome://extensions");
```
