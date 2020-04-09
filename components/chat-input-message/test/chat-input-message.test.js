import { html, fixture, expect, fixtureCleanup, oneEvent } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/index.js';

const basic = () =>
  html`
    <chat-input-message></chat-input-message>
  `;
const submitContent = () =>
  html`
    <chat-input-message>Submit</chat-input-message>
  `;

describe('ChatInputMessage', () => {
  let el;
  let ignoreTags;
  const ignoreAttributes = ['id', 'for', 'aria-describedby', 'aria-labelledby'];

  afterEach(() => fixtureCleanup());

  describe('Basic', () => {
    beforeEach(async () => {
      el = await fixture(basic());
      await el.updateComplete;
      const validator = el.shadowRoot.querySelector('[slot="feedback"]');
      ignoreTags = [validator.tagName.toLowerCase()];
    });
    it('DOM', () => expect(el).dom.to.equalSnapshot());
    it('Shadow DOM', () => expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes, ignoreTags }));
    it('Light DOM', () => expect(el).lightDom.to.equalSnapshot());
    it('passes the a11y audit', () => expect(el).shadowDom.to.be.accessible());

    it('Input handler', () => {
      const textarea = el.shadowRoot.querySelector('lion-textarea');
      textarea.value = 'Message';
      textarea.dispatchEvent(new Event('change'));
      expect(el.value).equals(textarea.value);
    });

    describe('Submit', () => {
      let button;
      beforeEach(() => {
        button = el.shadowRoot.querySelector('lion-button');
        spy(el, 'dispatchEvent');
      });
      afterEach(() => {
        el.dispatchEvent.restore();
      });
      it('empty message', () => {
        button.click();
        expect(el.dispatchEvent).not.be.called;
      });
      it('filled message', async () => {
        el.value = 'Message';
        setTimeout(() => button.click());
        const { detail } = await oneEvent(el, 'submit');
        expect(el.dispatchEvent).be.called;
        expect(detail).to.equal('Message');
        expect(el.value).to.be.empty;
      });
    });

    describe('Enter key', () => {
      let textarea;
      const event = new KeyboardEvent('keypress', { keyCode: 13 });
      beforeEach(() => {
        textarea = el.shadowRoot.querySelector('lion-textarea');
        spy(el, 'submit');
      });
      afterEach(() => {
        el.submit.restore();
      });
      it('submit', async () => {
        textarea.value = 'Message';
        textarea.dispatchEvent(event);
        expect(el.submit).be.called;
      });
      it('breakline', () => {
        el.enterBreak = true;
        textarea.dispatchEvent(event);
        expect(el.submit).not.be.callCount(1);
      });
    });
  });

  describe('Custom submit content', () => {
    beforeEach(async () => {
      el = await fixture(submitContent());
      return el.updateComplete;
    });
    it('DOM', () => expect(el).dom.to.equalSnapshot());
    it('Shadow DOM', () => expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes, ignoreTags }));
    it('Light DOM', () => expect(el).lightDom.to.equalSnapshot());
    it('passes the a11y audit', () => expect(el).shadowDom.to.be.accessible());
  });
});
