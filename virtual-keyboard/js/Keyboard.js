/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

// eslint-disable-next-line no-unused-vars
import * as storage from './languageSaver.js';
import createElement from './elementsCreator.js';
import language from './layouts/index.js'; // { en, ru }
import Key from './Key.js';

const main = createElement('main', '',
  [createElement('h1', 'title', 'RSS Virtual Keyboard'),
    createElement('h3', 'subtitle', 'Keyboard that has been made with Vanilla JS'),
    createElement('p', 'hint', 'Last language saves in localStorage')]);

export default class Keyboard {
  constructor(rowsOrder) {
    this.rowsOrder = rowsOrder;
    this.keysPressed = {};
    this.isCaps = false;
  }

  init(langCode) {
    this.keyBase = language[langCode];
    this.output = createElement('textarea', 'output', null, main,
      ['placeholder', 'Start type something...'],
      ['rows', 5],
      ['cols', 50],
      ['spellcheck', false],
      ['autocorrect', 'off']);
    this.container = createElement('div', 'keyboard', null, main, ['language', langCode]);
    document.body.prepend(main);
    return this;
  }

  generateLayout() {
    this.keyButtons = [];
    this.rowsOrder.forEach((row, i) => {
      const rowElement = createElement('div', 'keyboard__row', null, this.container, ['row', i + 1]);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => key.code === code);
        if (keyObj) {
          const keyButton = new Key(keyObj);
          this.keyButtons.push(keyButton);
          rowElement.appendChild(keyButton.div);
        }
      });
    });
  }
}
