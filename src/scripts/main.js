import debounce from 'lodash.debounce/index';

import { renderTextOptions } from '../scripts/renderTextOptions';
import { renderColorOptions } from '../scripts/renderColorOptions';
import { renderPositionOptions } from '../scripts/renderPositionOptions';

export function main(DOMelement) {
    const settingsContainer = DOMelement.querySelector('.settings-container');
    settingsContainer.insertAdjacentHTML('beforeend', renderColorOptions());
    settingsContainer.insertAdjacentHTML('beforeend', renderPositionOptions());
    settingsContainer.insertAdjacentHTML('beforeend', renderTextOptions());

    const DEFAULT_TOOLTIP_BACKGROUND_COLOR = 'primary';
    const DEFAULT_TOOLTIP_POSITION = 'left';
    const DEFAULT_TOOLTIP_TEXT_COLOR = '#ffffff';
    const DEFAULT_TOOLTIP_MAX_TEXT_LENGHT = 100;
    const DEFAULT_TOOLTIP_TEXT = 'Default Text';

    const userSettings = {
        backgroundColor: DEFAULT_TOOLTIP_BACKGROUND_COLOR,
        position: DEFAULT_TOOLTIP_POSITION,
        textColor: DEFAULT_TOOLTIP_TEXT_COLOR,
        maxTextLenght: DEFAULT_TOOLTIP_MAX_TEXT_LENGHT,
        tooltipText: DEFAULT_TOOLTIP_TEXT
    };

    const interfaceObjects = DOMelement.querySelectorAll('.objects-list__item');
    const backgroundColorSettings = settingsContainer.querySelector(
        '.settings-container__settings-list--color'
    );
    const positionSettings = settingsContainer.querySelector(
        '.settings-container__settings-list--position'
    );

    const textColorInput = settingsContainer.querySelector(
        '.text-settings-list__text-color-input'
    );
    const maxTextLengthInput = settingsContainer.querySelector(
        '.text-settings-list__max-text-lenght-input'
    );
    const tooltipTextInput = settingsContainer.querySelector(
        '.text-settings-list__text-input'
    );

    const hexColorValidationRegEx = /^#([0-9A-F]{3}){1,2}$/i;
    //Checks, if given value is proper HEX color

    let activeObject = 0;

    const renderTooltip = ({ backgroundColor, position }, tooltipText) => {
        return /* HTML */ `
            <div
                class="tooltip tooltip--color-${backgroundColor} tooltip--position-${position}"
                data-testid="tooltip"
            >
                <span class="tooltip__text">${tooltipText}</span>
            </div>
        `;
    };

    const updateTooltip = (userSettings, activeElement) => {
        deleteOldTooltip();
        createTooltip(userSettings, activeElement);
    };

    const getTextareaValue = ({ maxTextLenght, tooltipText }) => {
        if (tooltipText.length <= maxTextLenght) {
            return tooltipText;
        }
        return tooltipText.slice(0, maxTextLenght);
    };

    const updateTextColor = ({ textColor }) => {
        const tooltip = DOMelement.querySelector('.tooltip');
        const tooltipSpan = tooltip.firstElementChild;
        if (tooltipSpan) {
            tooltipSpan.style.color = textColor;
        }
    };

    const createTooltip = (userSettings, activeElement) => {
        const tooltipText = getTextareaValue(userSettings);
        const tooltip = renderTooltip(userSettings, tooltipText);
        activeElement.insertAdjacentHTML('beforeend', tooltip);
        updateTextColor(userSettings);
    };

    const deleteOldTooltip = () => {
        const oldTooltip = DOMelement.querySelector('.tooltip');
        if (oldTooltip) {
            oldTooltip.remove();
        }
    };

    const getActiveObjectIndex = object => {
        return Array.from(interfaceObjects).indexOf(object);
    };

    const isClickOnObject = element => {
        return Array.from(interfaceObjects).includes(element);
    };

    const addOnClickEvent = (userSettings, element) => {
        element.addEventListener('click', e => {
            if (isClickOnObject(e.target)) {
                activeObject = getActiveObjectIndex(e.target);
                updateTooltip(userSettings, e.target);
            }
        });
    };

    const addCustomOnClickEvents = (userSettings, elements) => {
        elements.forEach(element => addOnClickEvent(userSettings, element));
    };

    const isProperHexColor = color => {
        return hexColorValidationRegEx.test(color);
    };

    const setTextColor = userSettings => {
        const color = textColorInput.value;
        if (isProperHexColor(color)) {
            userSettings.textColor = color;
        } else {
            userSettings.textColor = DEFAULT_TOOLTIP_TEXT_COLOR;
        }
    };

    const isBiggerThanZero = value => {
        return value > 0;
    };

    const isValidNumber = value => {
        return !isNaN(value) && value;
    };

    const setMaxTextLength = userSettings => {
        const maxTextLenght = maxTextLengthInput.value;
        if (isValidNumber(maxTextLenght) && isBiggerThanZero(maxTextLenght)) {
            userSettings.maxTextLenght = maxTextLenght;
        }
    };

    const setTextareaValue = userSettings => {
        userSettings.tooltipText = tooltipTextInput.value;
    };

    backgroundColorSettings.addEventListener('change', () => {
        const activeBackgroundColor = settingsContainer.querySelector(
            '.color-settings-list__input:checked'
        );
        userSettings.backgroundColor = activeBackgroundColor.value;
        updateTooltip(userSettings, interfaceObjects[activeObject]);
    });

    positionSettings.addEventListener('change', () => {
        const activePosition = settingsContainer.querySelector(
            '.position-settings-list__input:checked'
        );
        userSettings.position = activePosition.value;
        updateTooltip(userSettings, interfaceObjects[activeObject]);
    });

    textColorInput.addEventListener(
        'input',
        debounce(() => {
            setTextColor(userSettings);
            updateTooltip(userSettings, interfaceObjects[activeObject]);
        }, 1000)
    );

    maxTextLengthInput.addEventListener(
        'input',
        debounce(() => {
            setMaxTextLength(userSettings);
            updateTooltip(userSettings, interfaceObjects[activeObject]);
        }, 1000)
    );

    tooltipTextInput.addEventListener(
        'input',
        debounce(() => {
            setTextareaValue(userSettings);
            updateTooltip(userSettings, interfaceObjects[activeObject]);
        }, 1000)
    );

    addCustomOnClickEvents(userSettings, interfaceObjects);
}
