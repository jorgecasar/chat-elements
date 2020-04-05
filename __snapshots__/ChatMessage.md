# `ChatMessage`

## `Basic`

#### `DOM`

```html
<chat-message> </chat-message>
```

#### `Shadow DOM`

```html
<div class="content" part="content">
  <div class="content-text">
    <slot> </slot>
  </div>
</div>
```

#### `Light DOM`

```html

```

## `Avatar`

#### `DOM`

```html
<chat-message alt="Random avatar" avatar="https://i.pravatar.cc/32"> </chat-message>
```

#### `Shadow DOM`

```html
<figure class="avatar" part="avatar">
  <img alt="undefined" src="https://i.pravatar.cc/32" />
</figure>
<div class="content" part="content">
  <div class="content-text">
    <slot> </slot>
  </div>
</div>
```

#### `Light DOM`

```html

```

## `User name`

#### `DOM`

```html
<chat-message user-name="User"> </chat-message>
```

#### `Shadow DOM`

```html
<div class="content" part="content">
  <div aria-hidden="false" class="content-user" part="content-user">
    User
  </div>
  <div class="content-text">
    <slot> </slot>
  </div>
</div>
```

#### `Light DOM`

```html

```

## `Hide user name`

#### `DOM`

```html
<chat-message hide-user="" user-name="User"> </chat-message>
```

#### `Shadow DOM`

```html
<div class="content" part="content">
  <div aria-hidden="false" class="sr-only" part="content-user">
    User
  </div>
  <div class="content-text">
    <slot> </slot>
  </div>
</div>
```

#### `Light DOM`

```html

```
