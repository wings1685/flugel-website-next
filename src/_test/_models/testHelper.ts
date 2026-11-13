import { expect } from "@playwright/test";
import type { Page } from "@playwright/test";

export class TestHelper {
	readonly page: Page;
	readonly baseURL: string;

	constructor(page: Page, baseURL?: string) {
		this.page = page;
		this.baseURL = baseURL ?? '';
	}

	async init(path: string = '/') {
		await this.page.goto(`${this.baseURL}${path}`);
		await expect(this.page).toHaveURL(`${this.baseURL}${path}`);
		await this.page.context().newCDPSession(this.page);
	}
}
