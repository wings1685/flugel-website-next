import { DeepGuard, Exclude, Props } from "./_parts";
import { Box, Glass } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";

export default function Page() {
	return (
		<main>
			<Glass as="section">
				<Box>
					<PageTitle icon="code">型の制御例</PageTitle>
					<Paragraph>
						フロントエンドのフレームワークを使用した型の制御においては、以下のような方法を採用しています。<br />
						以下は、本サイト内でのソースの一例をご案内します。
					</Paragraph>
				</Box>
				<DeepGuard />
				<Props />
				<Exclude />
			</Glass>
		</main>
	)
}
