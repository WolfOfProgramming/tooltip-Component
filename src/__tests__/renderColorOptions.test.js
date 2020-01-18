import {
    getByText,
    getByDisplayValue,
    getByLabelText
} from '@testing-library/dom';

import { renderColorOptions } from '../scripts/renderColorOptions';

function getExampleDOM() {
    const div = document.createElement('div');
    div.innerHTML = renderColorOptions();
    return div;
}

test('Testing Proper Rendering of Elements', () => {
    const container = getExampleDOM();

    expect(container).toBeTruthy();
    expect(getByText(container, 'Color')).toBeTruthy();

    expect(getByLabelText(container, 'Primary')).toBeTruthy();
    expect(getByDisplayValue(container, 'primary')).toBeTruthy();

    expect(getByLabelText(container, 'Secondary')).toBeTruthy();
    expect(getByDisplayValue(container, 'secondary')).toBeTruthy();

    expect(getByLabelText(container, 'Dark')).toBeTruthy();
    expect(getByDisplayValue(container, 'dark')).toBeTruthy();

    expect(getByLabelText(container, 'Light')).toBeTruthy();
    expect(getByDisplayValue(container, 'light')).toBeTruthy();

    expect(getByLabelText(container, 'Accent')).toBeTruthy();
    expect(getByDisplayValue(container, 'accent')).toBeTruthy();

    const colorSettingsItem = container.querySelectorAll(
        '.color-settings-list__item'
    );

    expect(colorSettingsItem.length).toBe(5);
});
