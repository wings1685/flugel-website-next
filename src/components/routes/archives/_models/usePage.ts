export const environment = [
	'iMac 2020',
	'MacBook Pro 2013',
	'Mac mini 2011',
	'iPhone 12',
	'iPhone Xs',
	'iPhone X',
	'iPhone 7',
] as const;

export const stacks = [
	'SolidStart',
	'SvelteKit',
	'Astro',
	'Qwik City',
	'Next',
	'Nuxt',
	'Valibot',
	'Zod',
	'ky',
	'Pinia',
	'Zustand',
	'Jotai',
	'Legend State',
	'Valtio',
	'Nano Stores',
	'urql',
	'Apollo',
	'TypeScript',
	'Sass (.sass)',
	'Laravel',
	'GraphQL',
	'Passkey',
	'MagicLink',
	'Vite',
	'Git',
] as const;

export const experiments = [{
	description: "ページ数 3 / コンポーネント数 33 のサイトを同一表示・機能で各フレームワークに 3 日間かけてリプレイスしました。\n対象フレームワークは SolidStart / SvelteKit / Qwik City / Next.js / Nuxt / Astro + Solid / Astro + Svelte / Astro + React / Astro + Vue の 9 種類です。",
	stacks: [
		'SolidStart (SSG)',
		'SvelteKit (SSG)',
		'Qwik City (SSG)',
		'Next.js (SSG)',
		'Nuxt (SSG)',
		'Astro (SSG)',
		'Solid',
		'Svelte',
		'React',
		'Vue',
		'TypeScript',
		'Sass',
	]
}, {
	description: "同一 Astro 上において、各状態管理をライブラリも含めて伝播速度を計測しました。\n対象状態管理は Solid Signal / Solid Nano Stores / Svelte Runes / Svelte Nano Stores / Vue Ref / Vue Nano Stores / React uSES / Jotai / Legend State / Valtio / Zustand / React Nano Stores の 12 種類です。",
	stacks: [
		'Astro (SSG)',
		'Solid',
		'Svelte',
		'React',
		'Vue',
		'Zustand',
		'Jotai',
		'Legend State',
		'Valtio',
		'Nano Stores',
		'TypeScript',
	]
}, {
	description: "Solid / Svelte / Vue / React において、SSR 環境でも状態汚染の無いグローバルストア機構を、寝床で思いついた翌日に開発しました。\nContext のように包む必要がなく、型推論も効き、Astro でもメタフレームワークでも動作します。",
	stacks: [
		'SolidStart (SSG)',
		'SvelteKit (SSG)',
		'Nuxt (SSG)',
		'Next.js (SSG)',
		'Astro (SSG)',
		'Solid',
		'Svelte',
		'React',
		'Vue',
		'Zustand',
		'Jotai',
		'Legend State',
		'Valtio',
		'Nano Stores',
		'TypeScript',
	]
}, {
	description: "Solid / Svelte / Qwik / Vue / React において、フォームライブラリを使わず、フレームワークの標準機能のみで同一機能を供給する機構を 7 日間かけて考案・開発しました。\n各フレームワークの特性から、関数注入型とコンポーネント型とし、Astro でもメタフレームワークでも動作します。",
	stacks: [
		'SolidStart (SSG)',
		'SvelteKit (SSG)',
		'Qwik City (SSG)',
		'Nuxt (SSG)',
		'Next.js (SSG)',
		'Astro (SSG)',
		'Solid',
		'Svelte',
		'React',
		'Vue',
		'TypeScript',
	]
}] as const;

export const sites = [{
	description: "質問に対する回答を押していく診断サイトの構築を行いました。\n似た診断サイトを昨年は SvelteKit で構築しましたが、今年は SolidStart で構築しました。",
	stacks: [
		'SolidStart (SSG)',
		'TypeScript',
		'Sass',
	]
}, {
	description: "個人事業をされている方のサイトの構築を行いました。\nSolid を使って、アンカーの制御や背景動画をスマホサイズでは読み込まないなどの、リアクティブ要素を埋め込みました。",
	stacks: [
		'Astro',
		'Solid',
		'TypeScript',
		'Sass',
	]

}, {
	description: "コーポレートサイトと特設サイトの構築を行いました。\n再帰的に Readonly を付与していく DeepGuard での型安全や、YAML 更新や API 取得でのデータを Valibot にて整合性検査をするなど、編集の利便性と安全性の両立を心がけました。",
	stacks: [
		'Next (SSG)',
		'Zustand',
		'Valibot',
		'TypeScript',
		'Sass',
	]

}, {
	description: "採用サイトと特設サイトの構築を行いました。\n読み込み完了まで遅延させたい場合の画像コンポーネントを置くだけで Loader が表示され、読み込み完了画像の累計を状態と扱って Loader を解除するなどの工夫をしています。",
	stacks: [
		'Next (SSG)',
		'Zustand',
		'TypeScript',
		'Sass',
	]
}, {
	description: "仕事相手との業務管理用に、クライアント設定・案件設定・タスク設定・日程設定・請求設定などをするウェブシステムを構築しました。\nどのタスクに基づくかの請求設定・タスクに対するやりとりの「もしもし」機能・Slack への様々な通知などを備えています。ログイン方法は、マジックリンクメールまたはパスキーです。",
	stacks: [
		'SvelteKit (SSG)',
		'Zod',
		'urql',
		'TypeScript',
		'Sass',
		'Laravel',
		'GraphQL',
		'Passkey',
		'MagicLink',
	]
}, {
	description: "質問に対する回答を押していく診断サイトの構築を行いました。\n回答状態は SvelteKit のリアクティブで簡単に管理・実装でき、短期間での実装が可能でした。",
	stacks: [
		'SvelteKit (SSG)',
		'TypeScript',
		'Sass',
	]
}, {
	description: "ウェブカタログ風の LP の制作を行いました。\n大きな画像であっても、スマートフォンで快適に閲覧できるよう、表示の工夫をしています。",
	stacks: [
		'Astro',
		'Solid',
		'TypeScript',
		'Sass',
	]
}, {
	description: "LP（ランディングページ）の制作を行いました。\n公開後対応分などは、変数により切り分けをできるようにしています。",
	stacks: [
		'Astro',
		'Solid',
		'Sass',
		'TypeScript',
	]
}, {
	description: "「以前に書いたコードを思い出したい」場合に、タグやフリーワードで検索できるような、コード断片の保管庫の構築を行いました（自分用）。\nスマホのみが手元にある環境でも、後でコード登録をできるように URL のみの登録でも可能にして「未登録エリア」に表示するようにしました。「海」をコンセプトにし、DB のテーブル名を「cruisers（コード）」「harbors（タグ）」「searoutes（リレーション）」「sailing（表示数）」と定義しました。ログイン方法は、パスキーです。",
	stacks: [
		'SolidStart (SSG)',
		'Valibot',
		'ky',
		'urql',
		'TypeScript',
		'Sass',
		'Laravel',
		'GraphQL',
		'Passkey',
	]
}, {
	description: "趣味の記録用サービスの構築を行いました（自分用）。\n集計を自動で行い、note へのまとめ投稿時にコピペできるように Markdown 形式で結果を出力できるようにしています。ログイン方法は、パスキーです。",
	stacks: [
		'Qwik City (SSG)',
		'Valibot',
		'ky',
		'urql',
		'TypeScript',
		'Sass',
		'Laravel',
		'GraphQL',
		'Passkey',
	]
}, {
	description: "よくアクセスするリンクを設定するウェブサービスの構築を行いました（家庭用）。\nLiquid Glass 風の Masonry レイアウトを採用し、タグでの管理やクリック集計による自動ソートも行います。「航空」をコンセプトにし、DB のテーブル名を「airplanes（リンク）」「airfields（タグ）」「airlines（リレーション）」「takeoff（クリック数）」と定義しました。ログイン方法は、パスキーです。",
	stacks: [
		'SolidStart (SSG)',
		'Valibot',
		'ky',
		'urql',
		'TypeScript',
		'Sass',
		'Laravel',
		'GraphQL',
		'Passkey',
	]
}, {
	description: "訪問履歴記録用の Swarm の、自分の行動範囲内にある Venue を集めるウェブサービスの構築を行いました（家庭用）。\n駅名やバス停名をタップすると、同じ経路の駅やバス停などを自動で表示し、次のアクセスに備える工夫をしています。ログイン方法は、パスキーです。",
	stacks: [
		'Qwik City (SSG)',
		'Valibot',
		'ky',
		'urql',
		'TypeScript',
		'Sass',
		'Laravel',
		'GraphQL',
		'Passkey',
	]
}, {
	description: "筋トレ記録ウェブサービスの構築を行いました（家庭用）。\nレップ数からポイント化し、ランダムでボーナスポイントが付与するようにしています。ログイン方法は、パスキーです。",
	stacks: [
		'SvelteKit (SSG)',
		'Zod',
		'ky',
		'Apollo',
		'TypeScript',
		'Sass',
		'Laravel',
		'GraphQL',
		'Passkey',
	]
}, {
	description: "自身の売上管理用のウェブシステムを構築しました（家庭用）。\n請求書はプリントでの PDF ダウンロードで発行できます。ログイン方法は、パスキーです。",
	stacks: [
		'Nuxt (SSG)',
		'Pinia',
		'Valibot',
		'ky',
		'Apollo',
		'TypeScript',
		'Sass',
		'Laravel',
		'GraphQL',
		'Passkey',
	]
}] as const;
