export const ModuleOptions = {
    LITE_MODE: "litemode"
};

export class ModuleSettings {
    static MODULE_NAME = 'bugvolution';

	static registerSettings() {
        game.settings.register(this.MODULE_NAME, ModuleOptions.LITE_MODE, this._buildBooleanConfig(ModuleOptions.LITE_MODE));
	}

	static getSetting(option) {
		return game.settings.get(this.MODULE_NAME, option);
    }

    /** @private */
    static _getNameConfig(optionName) {
        return {
            name: `${this.MODULE_NAME}.${optionName}-s`,
            hint: `${this.MODULE_NAME}.${optionName}-l`
        };
    }

    /** @private */
    static _buildChoiceConfig(optionName, choices, config = {}) {
        const defaultConfig = {
            scope: "client",
            config: true,
            default: false,
            type: String,
            choices,
            onChange: x => window.location.reload()
        };
        return {
            ...defaultConfig,
            ...this._getNameConfig(optionName),
            ...config
        };
    }    
    
    /** @private */
    static _buildBooleanConfig(optionName, config = {}) {
        const defaultConfig = {
            scope: "client",
            config: true,
            default: false,
            type: Boolean,
            onChange: x => window.location.reload()
        };
        return {
            ...defaultConfig,
            ...this._getNameConfig(optionName),
            ...config
        };
    }
}