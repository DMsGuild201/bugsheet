'use strict';

import SheetStyler from './scripts/sheet.js';
import { ModuleSettings } from './scripts/settings.js';

/**
 * These hooks register the following settings in the module settings.
 */
Hooks.once('init', () => {
	ModuleSettings.registerSettings();
});

/**
 * This line connects our method above with the chat rendering.
 * Note that this happens after the core code has already generated HTML.
 */
Hooks.on('renderTidy5eSheet', SheetStyler.process.bind(SheetStyler));