import { test, expect } from "@playwright/test";
import { TestHelper } from "./_models/testHelper";
import { monthData } from "@/_global/lib/shared";

test.describe('Nav コンポーネントと Bg コンポーネントの月変更連動テスト', () => {
	let helper: Readonly<TestHelper>;

	test.beforeEach(async ({ page, baseURL }) => {
		helper = new TestHelper(page, baseURL);
		await helper.init();
	});

	const month = new Date().getMonth();
	const nextMonth = month === 12 ? 1 : month + 1;
	const monthString = Object.keys(monthData)[month];
	const nextMonthString = Object.keys(monthData)[nextMonth];

	test('リンクを押したら月表示が変わるか', async ({ page }) => {
		await expect(page).toHaveURL(helper.baseURL);
		const links = page.getByTestId('btn-nav');

		await test.step('指定した初期画面に戻るボタンと次へボタンが存在していること', async () => {
			await expect(links).toHaveCount(12);
		});

		await test.step('Bg コンポーネントで srcset に切り替わった月の画像が入ったか確認', async () => {
			await page.locator(`[data-month="${monthString}"]`).scrollIntoViewIfNeeded();
			await links.nth(nextMonth).click();
			await page.waitForTimeout(1000);
			const bg = page.getByTestId('bg');
			const regexp = new RegExp(`${nextMonthString}.webp`);
			const src = await bg.getAttribute('src');
			expect(src).toMatch(regexp);
		});
	});
});
