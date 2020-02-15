const POSITIONS = ['top', 'bottom', 'left', 'right'];

const renderPositionItems = () => {
    return POSITIONS.map((position) => {
        return /* HTML */ `
            <li class="position-settings-list__item">
                <input
                    class="settings-container__input position-settings-list__input"
                    type="radio"
                    id="${position}"
                    name="position"
                    value="${position}"
                />
                <label class="settings-container__label" for="${position}">${position}</label>
            </li>
        `;
    }).join('');
};

export const renderPositionOptions = () => {
    return /* HTML */ `
        <div class="settings-container__section settings-container__section--position">
            <h2 class="settings-container__heading">Position</h2>
            <ul
                class="settings-container__settings-list settings-container__settings-list--position"
            >
                ${renderPositionItems()}
            </ul>
        </div>
    `;
};
