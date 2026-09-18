import { environment, stacks } from "../_models/usePage";
import { Box, Glass, HorizontalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";

export default function Environment() {
	return (
		<Glass as="section">
			<Box>
				<PageTitle icon="desktop">開発方針</PageTitle>
				<Paragraph>
					フロントエンドのフレームワークは、SolidStart / SvelteKit / Qwik / Next / Nuxt / Astro のいずれにおいても、サーバ環境上 SSG で構築をしております（ルーティングファイルは極限まで薄く、関連するファイルは近接させる、という思想を最も具現化できる SolidStart が今は最も好みです）。<br />
					Validator は、Valibot / Zod を使用していますが、軽量という観点から Valibot を好んで使用しています。<br />
					<br />
					エラーや動作に不明な点が出た場合は、再現性の確認 → 推論 → 仮説 → 検証という機序の解析に重きを置いた手順で解消しています。<br />
					<br />
					バックエンドが必要な場合は Laravel を使用しており、通信プロトコルには GraphQL を使用しています。過去に REST API で構築したこともあります。<br />
					ログイン認証はパスキー（WebAuthn）によるパスワードレス認証を主体にしていますが、lbuchs / simplewebauthn を使用した自前実装なので、外部サービスにユーザデータは渡しておりません（SolidStart / SvelteKit / Qwik / Nuxt の各サイトにパスキーを導入済み）。また、フォールバックとしてはマジックリンクメールを採用しています。<br />
					家庭用ツールをいくつか構築しており、これらは全て共通のパスキーとセッションを Laravel で共通基盤として据えているので、SSO 的な挙動になっています。
				</Paragraph>
			</Box>
			<Box>
				<Paragraph>以下の環境にて、開発と確認を行っています。</Paragraph>
				<HorizontalList className="monospace">
					{environment.map(env => (
						<li key={ env }>{ env }</li>
					))}
				</HorizontalList>
			</Box>
			<Box>
				<Paragraph>
					主に以下の言語・ツールを使用しております。<br />
					（本ウェブサイトは SolidStart + TypeScript + Sass + Vite）
				</Paragraph>
				<HorizontalList className="monospace">
					{stacks.map(stack => (
						<li key={ stack }>{ stack }</li>
					))}
				</HorizontalList>
			</Box>
		</Glass>
	)
}
