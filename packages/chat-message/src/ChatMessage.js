import { html, css, LitElement } from "@lion/core";

/**
 * @slot - Message
 * 
 * 
 * @cssprop [--chat-message-background=#eee] - Chat message background
 * @cssprop [--chat-message-color=#000] - Chat message color
 * @cssprop [--chat-message-radius=0] - Chat message radius
 * @cssprop [--chat-message-border=0 solid transparent] - Chat message border
 * @cssprop [--chat-message-gap=0.5rem] - Chat message gap
 * @cssprop [--chat-message-avatar-size=2rem] - Chat message avatar size
 * @cssprop [--chat-message-avatar-border=var(--chat-message-border)] - Chat message avatar border
 * @cssprop [--chat-message-avatar-radius=var(--chat-message-radius)] - Chat message avatar radius
 * @cssprop [--chat-message-me-background=var(--chat-message-background)] - Chat message me background
 * @cssprop [--chat-message-me-color=var(--chat-message-color)] - Chat message me color
 * @cssprop [--chat-message-me-border=var(--chat-message-border)] - Chat message me border
 * @cssprop [--chat-message-me-radius=var(--chat-message-radius)] - Chat message me radius
 * @cssprop [--chat-message-me-avatar-size=var(--chat-message-avatar-size)] - Chat message me avatar size
 * @cssprop [--chat-message-me-avatar-border=var(--chat-message-avatar-border)] - Chat message me avatar border
 * 
 * @csspart avatar
 * @csspart avatar-image
 * @csspart text
 * @csspart content
 * @csspart user
 * @csspart sr-only
 *
 */
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

      [part="avatar"] {
        flex-shrink: 0;
        margin: 0;
        width: var(--_avatar-size);
        height: var(--_avatar-size);
        border: var(--_avatar-border);
        border-radius: var(--_avatar-radius);
        overflow: hidden;
      }

      [part="avatar-image"] {
        max-width: 100%;
        max-height: 100%;
      }

      [part="content"] {
        padding: 0.5rem 1rem;
        background: var(--_background);
        color: var(--_color, #000);
        border-radius: var(--_radius);
        border: var(--_border);
      }

      [part="user"] {
        font-size: 0.8rem;
        margin-bottom: 0.5em;
      }

      [part="avatar"] + [part="content"] {
        margin: 0 0 0 var(--_gap);
      }

      :host([me]) {
        flex-direction: row-reverse;
      }

      :host([me]) [part="content"] {
        background: var(--chat-message-me-background, var(--_background));
        color: var(--chat-message-me-color, var(--_color));
        border: var(--chat-message-me-border, var(--_border));
        border-radius: var(--chat-message-me-radius, var(--_radius));
      }

      :host([me]) [part="avatar"] {
        width: var(--chat-message-me-avatar-size, var(--_avatar-size));
        height: var(--chat-message-me-avatar-size, var(--_avatar-size));
        border: var(--chat-message-me-avatar-border, var(--_avatar-border));
        border-radius: var(
          --chat-message-me-avatar-radius,
          var(--_avatar-radius)
        );
      }

      :host([me]) [part="avatar"] + [part="content"] {
        margin: 0 var(--_gap) 0 0;
      }

      [part*="sr-only"] {
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
      
      /**
       * Message from first person
       */
      me: {
        type: Boolean,
        reflect: true,
      },
       
      /**
       * Name of the user
       */
      userName: {
        type: String,
        attribute: "user-name",
      },
      
      /**
       * Set to true to hide user name from the message bubble
       */
      hideUser: {
        type: Boolean,
        attribute: "hide-user",
      },
      
      /**
       * User photo URL
       */
      avatar: {
        type: String
      },
      
      /**
       * Alternative text for user photo, if null it will take the user name
       */
      avatarAlt: {
        type: String,
        attribute: "avatar-alt",
      },
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
            <figure part="avatar">
              <img
                part="avatar-image"
                src="${this.avatar}"
                alt="${this.avatarAlt || this.userName}"
              />
            </figure>
          `
        : ""}
      <div part="text">
        ${this.userName ? this.renderUser() : ""}
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  renderUser() {
    return html`
      <div
        part="user${this.hideUser ? " sr-only" : ""}"
        aria-hidden="${this.me}"
      >
        ${this.userName}
      </div>
    `;
  }
}
