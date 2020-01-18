import {
    getByText,
    getByDisplayValue,
    getByLabelText
} from '@testing-library/dom';

import { renderTextOptions } from '../scripts/renderTextOptions';

function getExampleDOM() {
    const div = document.createElement('div');
    div.innerHTML = renderTextOptions();
    return div;
}

test('Testing Proper Rendering of Elements', () => {
    const container = getExampleDOM();

    expect(container).toBeTruthy();
    expect(getByText(container, 'Text')).toBeTruthy();
    expect(getByLabelText(container, 'Text color(HEX)')).toBeTruthy();
    expect(getByLabelText(container, 'Max text length')).toBeTruthy();
    expect(getByDisplayValue(container, '100')).toBeTruthy();
    expect(getByDisplayValue(container, '#ffffff')).toBeTruthy();

    const textSettingsItem = container.querySelectorAll(
        '.text-settings-list__item'
    );
    expect(textSettingsItem.length).toBe(3);

    const tooltipTextInput = container.querySelector(
        '.text-settings-list__text-input'
    );
    expect(tooltipTextInput).toBeTruthy();
});
