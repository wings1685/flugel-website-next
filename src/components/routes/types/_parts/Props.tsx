import { codes } from "../_models/codeProps";
import { getHighlightedCodeWithFormat } from "../_models/usePage";
import { unescapeTag } from "@/_global/lib/utils";
import { Highlight } from "@/components/features";
import { Box } from "@/components/shared/Sections";
import { Paragraph } from "@/components/shared/Typography";

export default async function Props() {
	const icon = await getHighlightedCodeWithFormat(unescapeTag(codes.icon));
	const pageTitle = await getHighlightedCodeWithFormat(unescapeTag(codes.pageTitle));
	const types = await getHighlightedCodeWithFormat(codes.types);
	const group = await getHighlightedCodeWithFormat(codes.group);

	return (
		<Box>
			<Paragraph>
				A コンポーネントを B コンポーネントから呼ぶ際、A コンポーネントの props を継承し、型定義がズレないようにしています。<br />
				また、サイズや色などは共通の型定義に全てユニオン型で定義し、コンポーネントなどで使用する際は Extract や Exclude で絞り、同じ定義を作らないようにしています。
			</Paragraph>
			<Highlight filename="Icon.tsx" code={ icon } />
			<Highlight filename="PageTitle.tsx" code={ pageTitle } />
			<Highlight filename="types.ts" code={ types } />
			<Highlight filename="Group.tsx" code={ group } />
		</Box>
	)
}
