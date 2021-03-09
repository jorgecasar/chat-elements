# Window

`chat-window` is a component to show chat window.

```js script
import "@chat-elements/window/define";
import { html } from "lit-html";
import "@mdjs/mdjs-story/mdjs-story.js";
import "@mdjs/mdjs-preview/mdjs-preview.js";
```

## Basic usage

```html story
<chat-window></chat-window>
```

## API

<api-viewer id="chat-window-api"></api-viewer>

```js script
import "api-viewer-element";
import { meta as chatWindowMeta } from "@chat-elements/window";
fetch(new URL("custom-elements.json", chatWindowMeta.url))
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("#chat-window-api").elements = data.tags;
  });
```