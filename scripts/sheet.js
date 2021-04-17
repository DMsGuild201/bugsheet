import { ModuleOptions, ModuleSettings } from './settings.js';

export default class SheetStyler {
	static process(sheet, html, data) {
		this.style(sheet, html, data);
		this.addSummaryExpandableSection(sheet, html);
		this.setInfoCardAnimationDuration(sheet, html);
	}

	static addSummaryExpandableSection(sheet, html) {
		html.find('.item .item-detail:not(.item-charges)').click((event) => sheet._onItemSummary(event));
	}

	static style(sheet, html, data) {
		if (!ModuleSettings.getSetting(ModuleOptions.LITE_MODE)) {
			html.addClass('bugsheet-modified');
		}
	}

	static setInfoCardAnimationDuration(sheet, html, data) {
		let duration = 0.2;
		const durationChoice = ModuleSettings.getSetting(ModuleOptions.ANIMATION_DURATION);
		switch (durationChoice) {
			case ModuleOptions.ANIMATION_DURATION_CHOICES.Short:
				duration = 0.1;
				break;
			case ModuleOptions.ANIMATION_DURATION_CHOICES.Long:
				duration = 0.3;
				break;
			case ModuleOptions.ANIMATION_DURATION_CHOICES.None:
				duration = 0;
				break;
		}
		html.find('#item-info-container').css("transition", `width ${duration}s ease`)
	}
}
