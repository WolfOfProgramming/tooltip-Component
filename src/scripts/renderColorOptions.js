export const renderColorOptions = () => {
    return /* HTML */ `
        <div
            class="settings-container__section settings-container__section--color"
        >
            <h2 class="settings-container__heading">Color</h2>
            <ul
                class="settings-container__settings-list settings-container__settings-list--color"
            >
                <li class="color-settings-list__item">
                    <input
                        class="settings-container__input color-settings-list__input"
                        type="radio"
                        id="primary"
                        name="color"
                        value="primary"
                    />
                    <label class="settings-container__label" for="primary"
                        >Primary</label
                    >
                </li>
                <li class="color-settings-list__item">
                    <input
                        class="settings-container__input color-settings-list__input"
                        type="radio"
                        id="secondary"
                        name="color"
                        value="secondary"
                    />
                    <label class="settings-container__label" for="secondary"
                        >Secondary</label
                    >
                </li>
                <li class="color-settings-list__item">
                    <input
                        class="settings-container__input color-settings-list__input"
                        type="radio"
                        id="dark"
                        name="color"
                        value="dark"
                    />
                    <label class="settings-container__label" for="dark"
                        >Dark</label
                    >
                </li>

                <li class="color-settings-list__item">
                    <input
                        class="settings-container__input color-settings-list__input"
                        type="radio"
                        id="light"
                        name="color"
                        value="light"
                    />
                    <label class="settings-container__label" for="light"
                        >Light</label
                    >
                </li>
                <li class="color-settings-list__item">
                    <input
                        class="settings-container__input color-settings-list__input"
                        type="radio"
                        id="accent"
                        name="color"
                        value="accent"
                    />
                    <label class="settings-container__label" for="accent"
                        >Accent</label
                    >
                </li>
            </ul>
        </div>
    `;
};
