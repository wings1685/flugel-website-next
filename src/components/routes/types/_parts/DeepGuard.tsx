import { codes } from "../_models/codeDeepGuard";
import { getHighlightedCodeWithFormat } from "../_models/usePage";
import { Box } from "@/components/shared/Sections";
import { Paragraph } from "@/components/shared/Typography";
import { Highlight } from "@/components/features";

export default async function DeepGuard() {
	const types = await getHighlightedCodeWithFormat(codes.types);
	const glass = await getHighlightedCodeWithFormat(codes.glass);

	return (
		<Box>
			<Paragraph>再帰的に Readonly を付与する DeepGuard 型を、コンポーネントの props や読み込みの戻り値の際に使用しています。</Paragraph>
			<Highlight v-if="codeDeepGuard" filename="types.ts" code={ types } />
			<Highlight v-if="codeGlass" filename="Glass.tsx" code={ glass } />
		</Box>
	)
}
