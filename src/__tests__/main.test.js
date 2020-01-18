import {
    queryByTestId,
    fireEvent,
    getByText,
    getByTestId,
    getByLabelText,
    waitForElement
} from '@testing-library/dom';

import { main } from '../scripts/main';

const leftClick = { button: 1 };

function getExampleDOM() {
    const div = document.createElement('div');
    div.innerHTML = /* HTML */ `
        <ul class="objects-list">
            <li class="objects-list__item">A</li>
            <li class="objects-list__item">B</li>
            <li class="objects-list__item">C</li>
        </ul>
        <div class="settings-container"></div>
    `;
    main(div);
    return div;
}

function getUpdatedTooltipReference(container) {
    return queryByTestId(container, 'tooltip');
}

function getTooltipSpanElement(container) {
    return getUpdatedTooltipReference(container).firstElementChild;
}

test('Tooltip should change position after chaning clicking on Object', async () => {
    const container = getExampleDOM();
    const objectA = getByText(container, 'A');
    const objectB = getByText(container, 'B');
    const objectC = getByText(container, 'C');

    expect(container).toBeTruthy();
    expect(getUpdatedTooltipReference(container)).toBeNull();

    fireEvent.click(objectA, leftClick);
    expect(getUpdatedTooltipReference(container)).toBeTruthy();
    expect(getUpdatedTooltipReference(container).parentNode).toBe(objectA);

    fireEvent.click(objectB, leftClick);
    expect(getUpdatedTooltipReference(container).parentNode).toBe(objectB);

    fireEvent.click(objectC, leftClick);
    expect(getUpdatedTooltipReference(container).parentNode).toBe(objectC);
});

describe('Should change color after click on radio button', () => {
    test('Testing default rendering', () => {
        const container = getExampleDOM();
        const tooltip = getUpdatedTooltipReference(container);

        expect(tooltip).toBeNull();
        expect(container).toBeTruthy;
    });

    test('Testing change of primary color', () => {
        const container = getExampleDOM();
        const colorPrimary = getByLabelText(container, 'Primary');

        fireEvent.click(colorPrimary, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--color-primary'
        );
    });

    test('Testing change of secondary color', () => {
        const container = getExampleDOM();
        const colorSecondary = getByLabelText(container, 'Secondary');

        fireEvent.click(colorSecondary, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--color-secondary'
        );
    });

    test('Testing change of dark color', () => {
        const container = getExampleDOM();
        const colorDark = getByLabelText(container, 'Dark');

        fireEvent.click(colorDark, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--color-dark'
        );
    });

    test('Testing change of light color', () => {
        const container = getExampleDOM();
        const colorLight = getByLabelText(container, 'Light');

        fireEvent.click(colorLight, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--color-light'
        );
    });

    test('Testing change of accent color', () => {
        const container = getExampleDOM();
        const colorAccent = getByLabelText(container, 'Accent');

        fireEvent.click(colorAccent, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--color-accent'
        );
    });
});

describe('Should change position after click on radio button', () => {
    test('Testing default rendering', () => {
        const container = getExampleDOM();
        const tooltip = getUpdatedTooltipReference(container);

        expect(tooltip).toBeNull();
        expect(container).toBeTruthy;
    });

    test('Testing change of left position', () => {
        const container = getExampleDOM();
        const positionLeft = getByLabelText(container, 'Left');

        fireEvent.click(positionLeft, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--position-left'
        );
    });

    test('Testing change of right position', () => {
        const container = getExampleDOM();
        const positionRight = getByLabelText(container, 'Right');

        fireEvent.click(positionRight, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--position-right'
        );
    });

    test('Testing change of bottom position', () => {
        const container = getExampleDOM();
        const positionBottom = getByLabelText(container, 'Bottom');

        fireEvent.click(positionBottom, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--position-bottom'
        );
    });

    test('Testing change of top position', () => {
        const container = getExampleDOM();
        const positionTop = getByLabelText(container, 'Top');

        fireEvent.click(positionTop, leftClick);
        expect(getUpdatedTooltipReference(container)).toBeTruthy();
        expect(getUpdatedTooltipReference(container).classList).toContain(
            'tooltip--position-top'
        );
    });
});

describe('Testing changing text color', () => {
    const changeTextColor = (element, color) => {
        fireEvent.input(element, { target: { value: color } });
    };

    test('Should change text-color to three digit hex color', async () => {
        const container = getExampleDOM();
        const textColorInput = getByLabelText(container, 'Text color(HEX)');

        changeTextColor(textColorInput, '#333');
        await waitForElement(() => queryByTestId(container, 'tooltip'), {
            container
        });
        expect(getTooltipSpanElement(container)).toBeTruthy();
        expect(getTooltipSpanElement(container).style.color).toBe(
            'rgb(51, 51, 51)'
        );
    });

    test('Should change text-color six digit hex color', async () => {
        const container = getExampleDOM();
        const textColorInput = getByLabelText(container, 'Text color(HEX)');

        changeTextColor(textColorInput, '#000000');
        await waitForElement(() => queryByTestId(container, 'tooltip'), {
            container
        });
        expect(getTooltipSpanElement(container)).toBeTruthy();
        expect(getTooltipSpanElement(container).style.color).toBe(
            'rgb(0, 0, 0)'
        );
    });

    test('Should change text-color to default after wrong input', async () => {
        const container = getExampleDOM();
        const textColorInput = getByLabelText(container, 'Text color(HEX)');

        changeTextColor(textColorInput, '#12313123123123123123');
        await waitForElement(() => queryByTestId(container, 'tooltip'), {
            container
        });
        expect(getTooltipSpanElement(container)).toBeTruthy();
        expect(getTooltipSpanElement(container).style.color).toBe(
            'rgb(255, 255, 255)'
        );
    });
});

describe('Testing changing text limit lenght', () => {
    const DEFAULT_TOOLTIP_TEXT = 'Default Text';

    const changeLenghtLimit = (element, limit) => {
        fireEvent.input(element, { target: { value: limit } });
    };

    test('Should Cut the text if text lenght is higher than limit', async () => {
        const container = getExampleDOM();
        const lenghLimitInput = getByLabelText(container, 'Max text length');

        changeLenghtLimit(lenghLimitInput, '5');
        await waitForElement(() => queryByTestId(container, 'tooltip'), {
            container
        });
        expect(getTooltipSpanElement(container)).toBeTruthy();
        expect(getTooltipSpanElement(container).textContent).toBe(
            DEFAULT_TOOLTIP_TEXT.slice(0, 5)
        );
    });

    test('Should display whole text if text lenght is smaller or equals text-limit', async () => {
        const container = getExampleDOM();
        const lenghLimitInput = getByLabelText(container, 'Max text length');

        changeLenghtLimit(lenghLimitInput, '23');
        await waitForElement(() => queryByTestId(container, 'tooltip'), {
            container
        });
        expect(getTooltipSpanElement(container)).toBeTruthy();
        expect(getTooltipSpanElement(container).textContent).toBe(
            DEFAULT_TOOLTIP_TEXT
        );
    });
});

describe('Testing changing input text value', () => {
    test('Should has same text as in input', async () => {
        const container = getExampleDOM();
        const tooltipTextInput = getByTestId(container, 'tooltip-text-input');
        const testText = 'It was really terrible to write these tests';

        fireEvent.input(tooltipTextInput, {
            target: { value: testText }
        });
        await waitForElement(() => queryByTestId(container, 'tooltip'), {
            container
        });
        expect(getTooltipSpanElement(container)).toBeTruthy();
        expect(getTooltipSpanElement(container).textContent).toBe(testText);
    });
});
