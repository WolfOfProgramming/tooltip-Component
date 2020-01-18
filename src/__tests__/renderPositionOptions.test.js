import {
    getByText,
    getByDisplayValue,
    getByLabelText
} from '@testing-library/dom';

import { renderPositionOptions } from '../scripts/renderPositionOptions';

function getExampleDOM() {
    const div = document.createElement('div');
    div.innerHTML = renderPositionOptions();
    return div;
}

test('Testing Proper Rendering of Elements', () => {
    const container = getExampleDOM();

    expect(container).toBeTruthy();
    expect(getByText(container, 'Position')).toBeTruthy();

    expect(getByLabelText(container, 'Top')).toBeTruthy();
    expect(getByDisplayValue(container, 'top')).toBeTruthy();

    expect(getByLabelText(container, 'Left')).toBeTruthy();
    expect(getByDisplayValue(container, 'left')).toBeTruthy();

    expect(getByLabelText(container, 'Right')).toBeTruthy();
    expect(getByDisplayValue(container, 'right')).toBeTruthy();

    expect(getByLabelText(container, 'Bottom')).toBeTruthy();
    expect(getByDisplayValue(container, 'bottom')).toBeTruthy();

    const positionSettingsItem = container.querySelectorAll(
        '.position-settings-list__item'
    );

    expect(positionSettingsItem.length).toBe(4);
});
