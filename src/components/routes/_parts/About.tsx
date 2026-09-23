import { GlassButton } from "@/components/features";
import { Glass, Group } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import { Icon } from "@/components/shared/Utils";

export default function About() {
	return (
		<Glass as="section">
			<PageTitle icon="home">Flügel について</PageTitle>
			<Paragraph as="div">
				<ruby>Flügel<rp>（</rp><rt>フリューゲル</rt><rp>）</rp></ruby><p>は、京都府京都市で活動する、ウェブサイト制作・ウェブシステム開発のフリーランスです。「Flügel」とはドイツ語で「翼」を意味し、お客様のウェブサイトやウェブアプリケーションが大空高く羽ばたくお手伝いをいたします（適格請求書発行事業者登録済み）。</p>
			</Paragraph>
			<Paragraph>
				このサイトは SolidStart で構築しました。他にも SvelteKit / Astro / Next / Nuxt / Qwik City で構築したプロジェクトがあります。型の制御例や実験・構築一覧は、各ページを参照してください。
			</Paragraph>
			<Group direction="right">
				<GlassButton as="a" href="/archives">
					実験・構築一覧
					<Icon type="arrow" />
				</GlassButton>
				<GlassButton as="a" href="/types">
					型の制御例
					<Icon type="arrow" />
				</GlassButton>
			</Group>
		</Glass>
	)
}
