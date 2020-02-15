const COLORS = ['primary', 'secondary', 'dark', 'light', 'accent'];

const renderColorItems = () => {
    return COLORS.map((color) => {
        return /* HTML */ `
            <li class="color-settings-list__item">
                <input
                    class="settings-container__input color-settings-list__input"
                    type="radio"
                    id="${color}"
                    name="color"
                    value="${color}"
                    checked
                />
                <label class="settings-container__label" for="${color}">${color}</label>
            </li>
        `;
    }).join('');
};

export const renderColorOptions = () => {
    return /* HTML */ `
        <div class="settings-container__section settings-container__section--color">
            <h2 class="settings-container__heading">Color</h2>
            <ul class="settings-container__settings-list settings-container__settings-list--color">
                ${renderColorItems()}
            </ul>
        </div>
    `;
};
