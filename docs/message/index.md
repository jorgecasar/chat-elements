# Message

`chat-message` is a component to show chat message.

```js script
import '@chat-elements/message/define';
import { html } from 'lit-html';
import '@mdjs/mdjs-story/mdjs-story.js';
import '@mdjs/mdjs-preview/mdjs-preview.js';
```

## Basic usage

```html story
<chat-message>Hello World!</chat-message>
```

## Examples

### Custom Avatar

```html preview-story
<chat-message user-name="User 1" avatar="https://i.pravatar.cc/48" alt="Random avatar">Hello World!</chat-message>
```

### Custom styles

```html preview-story
<style>
  .custom-content {
    background: #111;
    padding: 1rem;
  }
  .custom-content chat-message {
    --chat-message-color: #EEE;
    --chat-message-background: #111;
    --chat-message-border: 1px solid #222;
    --chat-message-radius: 8px;
    --chat-message-avatar-size: 2.5rem;
    --chat-message-avatar-border: 1px solid #333;
    --chat-message-avatar-radius: 50%;
    --chat-message-me-color: #FFF;
    --chat-message-me-background: #222;
    --chat-message-me-border: 1px solid #333;
    --chat-message-me-radius: 8px;
    --chat-message-me-avatar-size: 1.5rem;
    --chat-message-me-avatar-border: 1px solid #444;
    --chat-message-me-avatar-radius: 50%;
    margin-bottom: 1rem;
  }
</style>
<div class="custom-content">
  <chat-message user-name="User 1" avatar="https://i.pravatar.cc/48" alt="Random avatar">Hello World!</chat-message>
  <chat-message me user-name="User 2" avatar="https://i.pravatar.cc/48" alt="Other random avatar">With a really, really, really, really, really, really, really, really long message!</chat-message>
</div>
```

## API

<api-viewer id="chat-message-api"></api-viewer>

```js script
import 'api-viewer-element';
import { meta as chatMessageMeta } from '@chat-elements/message';
fetch(new URL('custom-elements.json', chatMessageMeta.url))
    .then(res => res.json())
    .then(data => {
      document.querySelector('#chat-message-api').elements = data.tags;
    });
```