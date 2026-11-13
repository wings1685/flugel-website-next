import { test, expect } from "@playwright/test";
import { TestHelper } from "./_models/testHelper";

test.describe('Blog コンポーネントのリアルデータ取得テスト', () => {
	let helper: Readonly<TestHelper>;

	test.beforeEach(async ({ page, baseURL }) => {
		helper = new TestHelper(page, baseURL);
		await helper.init();
	});

	test('実際にAPIやネットワークからデータを取得し、画面に記事がレンダリングされるか', async ({ page }) => {
		const articles = page.locator('article');
		await expect(articles).toHaveCount(5);
	});
});
