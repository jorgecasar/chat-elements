import { html, fixture, expect, fixtureCleanup } from '@open-wc/testing';
import '../src/index.js';

const basic = () =>
  html`
    <chat-message></chat-message>
  `;
const avatar = () =>
  html`
    <chat-message avatar="https://i.pravatar.cc/32" alt="Random avatar"></chat-message>
  `;
const userName = () =>
  html`
    <chat-message user-name="User"></chat-message>
  `;
const hiddenUserName = () =>
  html`
    <chat-message user-name="User" hide-user></chat-message>
  `;

describe('ChatMessage', () => {
  let el;

  afterEach(() => fixtureCleanup());

  describe('Basic', () => {
    beforeEach(async () => {
      el = await fixture(basic());
      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });

  describe('Avatar', () => {
    beforeEach(async () => {
      el = await fixture(avatar());
      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });

  describe('User name', () => {
    beforeEach(async () => {
      el = await fixture(userName());
      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });

  describe('Hide user name', () => {
    beforeEach(async () => {
      el = await fixture(hiddenUserName());
      return el.updateComplete;
    });

    it('DOM', async () => {
      expect(el).dom.to.equalSnapshot();
    });

    it('Shadow DOM', async () => {
      expect(el).shadowDom.to.equalSnapshot();
    });

    it('Light DOM', async () => {
      expect(el).lightDom.to.equalSnapshot();
    });

    it('passes the a11y audit', async () => {
      await expect(el).shadowDom.to.be.accessible();
    });
  });
});
