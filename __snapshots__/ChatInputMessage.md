# `ChatInputMessage`

## `Basic`

#### `DOM`

```html
<chat-input-message> </chat-input-message>
```

#### `Shadow DOM`

```html
<lion-form aria-invalid="false" class="form-control" name="chat" shows-feedback-for="">
  <form>
    <lion-textarea
      class="form-field"
      max-rows="1"
      name="message"
      placeholder="Write a message"
      rows="1"
      shows-feedback-for=""
    >
      <div slot="suffix">
        <lion-button aria-label="Send" role="button" tabindex="0" type="submit">
          <slot>
            Send
          </slot>
          <button aria-hidden="true" slot="_button" tabindex="-1" type="submit"></button>
        </lion-button>
      </div>
      <label slot="label">
        Message
      </label>
      <div slot="help-text"></div>
      <textarea
        aria-invalid="false"
        aria-required="true"
        class="form-control"
        name="message"
        placeholder="Write a message"
        rows="1"
        slot="input"
        style="resize: none; overflow: hidden; overflow-wrap: break-word; max-height: 40px; height: 40px;"
      >
      </textarea>
    </lion-textarea>
  </form>
  <label slot="label"> </label>
  <div slot="help-text"></div>
</lion-form>
```

#### `Light DOM`

```html

```

## `Custom submit content`

#### `DOM`

```html
<chat-input-message>
  Submit
</chat-input-message>
```

#### `Shadow DOM`

```html
<lion-form aria-invalid="false" class="form-control" name="chat" shows-feedback-for="">
  <form>
    <lion-textarea
      class="form-field"
      max-rows="1"
      name="message"
      placeholder="Write a message"
      rows="1"
      shows-feedback-for=""
    >
      <div slot="suffix">
        <lion-button aria-label="Send" role="button" tabindex="0" type="submit">
          <slot>
            Send
          </slot>
          <button aria-hidden="true" slot="_button" tabindex="-1" type="submit"></button>
        </lion-button>
      </div>
      <label slot="label">
        Message
      </label>
      <div slot="help-text"></div>
      <textarea
        aria-invalid="false"
        aria-required="true"
        class="form-control"
        name="message"
        placeholder="Write a message"
        rows="1"
        slot="input"
        style="resize: none; overflow: hidden; overflow-wrap: break-word; max-height: 40px; height: 40px;"
      >
      </textarea>
    </lion-textarea>
  </form>
  <label slot="label"> </label>
  <div slot="help-text"></div>
</lion-form>
```

#### `Light DOM`

```html
Submit
```
