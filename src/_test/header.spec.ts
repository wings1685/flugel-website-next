import { test, expect } from "@playwright/test";
import { TestHelper } from "./_models/testHelper";

test.describe('Header コンポーネントのナビゲーションテスト', () => {
	let helper: Readonly<TestHelper>;

	test.beforeEach(async ({ page, baseURL }) => {
		helper = new TestHelper(page, baseURL);
		await helper.init();
	});

	test('Typesリンクをクリックしたとき、正常にパスが切り替わり active クラスが付与されるか', async ({ page }) => {
		await expect(page).toHaveURL(helper.baseURL);
		const homeLink = page.getByTestId('btn-header-home');
		const typesLink = page.getByTestId('btn-header-types');

		await test.step('最初は "Home" に active クラスがついていることを確認', async () => {
			await expect(homeLink).toContainClass('active');
		});

		await test.step('"Types" リンクに active クラスが付き、"Home" から外れたかを確認', async () => {
			await typesLink.click();
			await expect(homeLink).not.toContainClass('active');
			await expect(typesLink).toContainClass('active');
		});
	});
});
