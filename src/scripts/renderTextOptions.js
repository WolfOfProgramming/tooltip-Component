export const renderTextOptions = () => {
    return /* HTML */ `
        <div
            class="settings-container__section settings-container__section--text"
        >
            <h2 class="settings-container__heading">Text</h2>
            <ul
                class="settings-container__settings-list settings-container__settings-list--text"
            >
                <li class="text-settings-list__item">
                    <label for="text-color">Text color(HEX)</label>
                    <input
                        type="text"
                        id="text-color"
                        name="color HEX"
                        value="#ffffff"
                        class="text-settings-list__text-color-input"
                    />
                </li>

                <li class="text-settings-list__item">
                    <label for="max-length">Max text length</label>
                    <input
                        type="text"
                        id="max-length"
                        name="Max length"
                        value="100"
                        class="text-settings-list__max-text-lenght-input"
                    />
                </li>
                <li class="text-settings-list__item">
                    <textarea
                        class="text-settings-list__text-input"
                        name="text-area"
                        data-testid="tooltip-text-input"
                        id="text-area"
                        cols="30"
                        rows="10"
                    ></textarea>
                </li>
            </ul>
        </div>
    `;
};
