import { ModuleOptions, ModuleSettings } from './settings.js';

export default class SheetStyler {
	static process(sheet, html, data) {
		this.style(sheet, html, data);
		this.addSummaryExpandableSection(sheet, html);
	}

	static addSummaryExpandableSection(sheet, html) {
		html.find('.item .item-detail:not(.item-charges)').click(event => sheet._onItemSummary(event));
	}

	static style(sheet, html, data) {
		const isLiteMode = ModuleSettings.getSetting(ModuleOptions.LITE_MODE);
		if (!isLiteMode) {
			html.addClass("bugsheet-modified");
		}
	}
}
