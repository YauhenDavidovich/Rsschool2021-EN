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
        document.addEventListener('keydown', this.handleEvent);
        document.addEventListener('keyup', this.handleEvent);
    }

    handleEvent = (event) => {
        if (event.stopPropagation) event.stopPropagation();
        const {code, type} = event;
        const keyObj = this.keyButtons.find((key) => key.code === code);
        if (!keyObj) return; // check whether button is in button set
        this.output.focus();

        if (type.match(/keydown|mousedown/)) {
            if (type.match(/key/)) event.preventDefault();

            if (code.match(/Shift/)) this.shiftKey = true;
            keyObj.div.classList.add('active');

            //switch language
            if (code.match(/Control/)) this.ctrlKey = true;
            if (code.match(/Alt/)) this.altKey = true;
            if (code.match(/Control/) && this.altKey) this.switchLanguage();
            if (code.match(/Alt/) && this.ctrlKey) this.switchLanguage();

            if (!this.isCaps) {
                this.printOutput(keyObj, this.shiftKey ? keyObj.shift : keyObj.small);
            } else if (this.isCaps) {
                if (this.shiftKey) {
                    this.printOutput(keyObj, keyObj.sub.innerHTML ? keyObj.shift : keyObj.small);
                } else {
                    this.printOutput(keyObj, !keyObj.sub.innerHTML ? keyObj.shift : keyObj.small);
                }
            }

            //release buttons
        } else if (event.type.match(/keyup|mouseup/)) {
            keyObj.div.classList.remove('active');
            if (code.match(/Shift/)) this.shiftKey = false;

            if (code.match(/Control/)) this.ctrlKey = false;
            if (code.match(/Alt/)) this.altKey = false;
        }
    }


    switchLanguage = () => {
        const langAb = Object.keys(language);
        let lang = langAb.indexOf(this.container.dataset.language);
        this.keyBase = lang + 1 < langAb.length ? language[langAb[lang += 1]]
            : language[langAb[lang -= lang]];
        this.container.dataset.language = langAb[lang];
        storage.set('kbLang', langAb[lang])
        this.keyButtons.forEach((button) => {
            const keyObj = this.keyBase.find((key) => key.code === button.code);
            if (!keyObj) return;
            button.shift = keyObj.shift;
            button.small = keyObj.small;
            if (keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
                button.sub.innerHTML = keyObj.shift;
            } else {
                button.sub.innerHTML = '';
            }
            button.letter.innerHTML = keyObj.small;
        });
    }

    printOutput = (keyObj, symbol) => {
        let cursorPos = this.output.selectionStart;
        const left = this.output.value.slice(0, cursorPos);
        const right = this.output.value.slice(cursorPos);
        const fnButtonHandler = {
            Tab: () => {
                this.output.value = `${left}\t${right}`;
                cursorPos += 1;
            },
            ArrowLeft: () => {
                cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
            },
            ArrowRight: () => {
                cursorPos += 1;
            },
            ArrowUp: () => {
                const positionFromLeft = this.output.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [[1]];
                cursorPos -= positionFromLeft[0].length;
            },
            ArrowDown: () => {
                const positionFromLeft = this.output.value.slice(cursorPos).match(/^.*(\n).*(?!\1)/) || [[1]];
                cursorPos += positionFromLeft[0].length;
            },
            Enter: () => {
                this.output.value = `${left}\n${right}`;
                cursorPos += 1;
            },
            Delete: () => {
                this.output.value = `${left}${right.slice(1)}`;
            },
            Backspace: () => {
                this.output.value = `${left.slice(0, -1)}${right}`;
                cursorPos -= 1;
            },
            Space: () => {
                this.output.value = `${left} ${right}`;
                cursorPos += 1;
            },
        };
        if (fnButtonHandler[keyObj.code]) fnButtonHandler[keyObj.code]();
        else if (!keyObj.isFnKey) {
            cursorPos += 1;
            this.output.value = `${left}${symbol || ''}${right}`;
        }
        this.output.setSelectionRange(cursorPos, cursorPos);
    }

}
