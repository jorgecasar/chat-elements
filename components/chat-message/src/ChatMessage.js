import { html, css, LitElement } from 'lit-element';

export class ChatMessage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        --_background: var(--chat-message-background, #eee);
        --_color: var(--chat-message-color, #000);
        --_radius: var(--chat-message-radius, 0);
        --_border: var(--chat-message-border, 0 solid transparent);
        --_gap: var(--chat-message-gap, 0.5rem);
        --_avatar-size: var(--chat-message-avatar-size, 2rem);
        --_avatar-border: var(--chat-message-avatar-border, var(--_border));
        --_avatar-radius: var(--chat-message-avatar-radius, var(--_radius));
      }
      * {
        box-sizing: border-box;
      }

      .avatar {
        flex-shrink: 0;
        margin: 0;
        width: var(--_avatar-size);
        height: var(--_avatar-size);
        border: var(--_avatar-border);
        border-radius: var(--_avatar-radius);
        overflow: hidden;
      }

      .avatar img {
        max-width: 100%;
        max-height: 100%;
      }

      .content {
        padding: 0.5rem 1rem;
        background: var(--_background);
        color: var(--_color, #000);
        border-radius: var(--_radius);
        border: var(--_border);
      }

      .content-user {
        font-size: 0.8rem;
        margin-bottom: 0.5em;
      }

      .avatar + .content {
        margin: 0 0 0 var(--_gap);
      }

      :host([me]) {
        flex-direction: row-reverse;
      }

      :host([me]) .content {
        background: var(--chat-message-me-background, var(--_background));
        color: var(--chat-message-me-color, var(--_color));
        border: var(--chat-message-me-border, var(--_border));
        border-radius: var(--chat-message-me-radius, var(--_radius));
      }

      :host([me]) .avatar {
        width: var(--chat-message-me-avatar-size, var(--_avatar-size));
        height: var(--chat-message-me-avatar-size, var(--_avatar-size));
        border: var(--chat-message-me-avatar-border, var(--_avatar-border));
        border-radius: var(--chat-message-me-avatar-radius, var(--_avatar-radius));
      }

      :host([me]) .avatar + .content {
        margin: 0 var(--_gap) 0 0;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `;
  }

  static get properties() {
    return {
      me: {
        type: Boolean,
        reflect: true,
      },
      userName: {
        type: String,
        attribute: 'user-name',
      },
      hideUser: {
        type: Boolean,
        attribute: 'hide-user',
      },
      avatar: { type: String },
      avatarAlt: { type: String },
    };
  }

  constructor() {
    super();
    this.me = false;
  }

  render() {
    return html`
      ${this.avatar
        ? html`
            <figure part="avatar" class="avatar">
              <img src="${this.avatar}" .alt="${this.avatarAlt || this.userName}" />
            </figure>
          `
        : ''}
      <div part="content" class="content">
        ${this.userName ? this.renderUser() : ''}
        <div class="content-text">
          <slot></slot>
        </div>
      </div>
    `;
  }

  renderUser() {
    return html`
      <div
        part="content-user"
        class="${this.hideUser ? 'sr-only' : 'content-user'}"
        aria-hidden="${this.me}"
      >
        ${this.userName}
      </div>
    `;
  }
}
