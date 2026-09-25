import { codes } from "../_models/codeExclude";
import { getHighlightedCodeWithFormat } from "../_models/usePage";
import { unescapeTag } from "@/_global/lib/utils";
import { Highlight } from "@/components/features";
import { Box } from "@/components/shared/Sections";
import { Paragraph } from "@/components/shared/Typography";

export default async function Exclude() {
	const glass = await getHighlightedCodeWithFormat(unescapeTag(codes.glass));

	return (
		<Box>
			<Paragraph>コンポーネントが div や a など複数の要素で展開する際は、div を指定する場合は href を渡さないよう、逆に a を指定する場合は href が必須であるような、排他的型制御を行っています。</Paragraph>
			<Highlight filename="Glass.tsx" code={ glass } />
		</Box>
	)
}
