import { html, css, LitElement } from 'lit-element';
import { Required } from '@lion/validate';
import '@lion/form/lion-form.js';
import '@lion/button/lion-button.js';
import '@lion/textarea/lion-textarea.js';
import { LionTextarea } from  '@lion/textarea';
import { LionButton } from '@lion/button';
import { LocalizeMixin, localize } from '@lion/localize';

const lionButtonStyles = LionButton.styles;
Object.defineProperty(LionButton, 'styles', {
  get: () => [
    lionButtonStyles,
    css`
      :host {
        padding: 0;
      }
      .btn {
        padding: 8px;
      }
      .click-area {
        margin: 0;
      }
      :host .btn ::slotted(button) {
        padding: 0;
        border: 0;
      }
    `,
  ],
});

const lionTextareaStyles = LionTextarea.styles;
Object.defineProperty(LionTextarea, 'styles', {
  get: () => [
    lionTextareaStyles,
    css`
      .input-group__container {
        align-items: flex-end;
      }
      .form-field__group-two {
        flex-direction: column-reverse;
        display: flex;
      }
    `,
  ],
});
const localizeNamespace = 'chat-input-message';

localize.loadNamespace({
  [localizeNamespace]: locale => import(`./translations/${locale}.js`),
});

export class ChatInputMessage extends LocalizeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      * {
        box-sizing: border-box;
      }
      lion-textarea {
        position: relative;
      }
      textarea {
        padding: 7px 8px;
        line-height: 24px;
        border: 1px solid #eee;
        box-sizing: border-box;
      }
      ::slotted(svg) {
        height: 24px;
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
      value: { type: String },
      enterBreak: {
        type: Boolean,
        attribute: 'enter-break',
      },
    };
  }

  constructor() {
    super();
    this.value = '';
  }

  firstUpdated() {
    super.firstUpdated();
    this._form = this.shadowRoot.querySelector('lion-form');
  }

  render() {
    return html`
      <lion-form id="form" @submit="${this.submit}" name="chat">
        <form>
          <lion-textarea
            name="message"
            rows="1"
            max-rows="4"
            .modelValue="${this.value}"
            .validators="${[
              new Required(null, {
                getMessage: () => this.msgLit('chat-input-message:requiredMessage'),
              }),
            ]}"
            placeholder="${this.msgLit('chat-input-message:placeholder')}"
            @model-value-changed="${this.modelValueChanged}"
            @change="${this.changeHandler}"
            @keypress="${this.keypressHandler}"
          >
            <label slot="label" class="sr-only">${this.msgLit('chat-input-message:label')}</label>
            <div slot="suffix">
              <lion-button ?disabled="${this.submitDisabled}" type="submit" aria-label="${this.msgLit('chat-input-message:submit')}">
                <slot>${this.msgLit('chat-input-message:submit')}</slot>
              </lion-button>
            </div>
          </lion-textarea>
        </form>
      </lion-form>
    `;
  }

  static get localizeNamespaces() {
    return [localizeNamespace, ...super.localizeNamespaces];
  }

  static get waitForLocalizeNamespaces() {
    // return false to unblock the rendering till the data are loaded
    return true;
  }

  modelValueChanged(event) {
    const [textarea] = event.detail.formPath;
    this.value = textarea.value;
  }

  changeHandler(event) {
    this.value = event.target.value.trim();
  }

  keypressHandler(event) {
    if (!this.enterBreak && event.keyCode === 13) {
      event.preventDefault();
      this.submit(event);
    }
  }

  get submitDisabled() {
    return this.value === '' || (this._form && this._form.hasFeedbackFor.includes('error'));
  }

  async submit() {
    /**
     * Fired when form is sent
     * @event submit
     * @param {String} text Text sent from the field
     */
    if (!this.submitDisabled) {
      this.dispatchEvent(
        new CustomEvent('submit', {
          composed: true,
          bubbles: true,
          detail: this._form.serializedValue.message,
        }),
      );
      this._form.resetGroup();
    }
  }
}
