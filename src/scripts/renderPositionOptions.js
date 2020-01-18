export const renderPositionOptions = () => {
    return /* HTML */ `
        <div
            class="settings-container__section settings-container__section--position"
        >
            <h2 class="settings-container__heading">Position</h2>
            <ul
                class="settings-container__settings-list settings-container__settings-list--position"
            >
                <li class="position-settings-list__item">
                    <input
                        class="settings-container__input position-settings-list__input"
                        type="radio"
                        id="top"
                        name="position"
                        value="top"
                    />
                    <label class="settings-container__label" for="top"
                        >Top</label
                    >
                </li>
                <li class="position-settings-list__item">
                    <input
                        class="settings-container__input position-settings-list__input"
                        type="radio"
                        id="bottom"
                        name="position"
                        value="bottom"
                    />
                    <label class="settings-container__label" for="bottom"
                        >Bottom</label
                    >
                </li>
                <li class="position-settings-list__item">
                    <input
                        class="settings-container__input position-settings-list__input"
                        type="radio"
                        id="right"
                        name="position"
                        value="right"
                    />
                    <label class="settings-container__label" for="right"
                        >Right</label
                    >
                </li>

                <li class="position-settings-list__item">
                    <input
                        class="settings-container__input position-settings-list__input"
                        type="radio"
                        id="left"
                        name="position"
                        value="left"
                    />
                    <label class="settings-container__label" for="left"
                        >Left</label
                    >
                </li>
            </ul>
        </div>
    `;
};
