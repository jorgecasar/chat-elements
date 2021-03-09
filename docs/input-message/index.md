# Input Message

`chat-input-message` is a component to show chat message.

```js script
import '@chat-elements/input-message/define';
import { html } from 'lit-html';
import '@mdjs/mdjs-story/mdjs-story.js';
import '@mdjs/mdjs-preview/mdjs-preview.js';
```

## Basic usage

```html story
<chat-input-message></chat-input-message>
```

## API

<api-viewer id="chat-input-message-api"></api-viewer>

```js script
import 'api-viewer-element';
import { meta as chatInputMessageMeta } from '@chat-elements/input-message';
fetch(new URL('custom-elements.json', chatInputMessageMeta.url))
    .then(res => res.json())
    .then(data => {
      document.querySelector('#chat-input-message-api').elements = data.tags;
    });
```