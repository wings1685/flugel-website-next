import { codes } from "./_models/codeProps";
import { getHighlightedCodeWithFormat } from "./_models/usePage";
import { unescapeTag } from "@/_global/lib/utils";
import Highlight from "./Highlight";

export default async function PropsCode() {
	const icon = await getHighlightedCodeWithFormat(unescapeTag(codes.icon));
	const pageTitle = await getHighlightedCodeWithFormat(unescapeTag(codes.pageTitle));
	const types = await getHighlightedCodeWithFormat(codes.types);
	const group = await getHighlightedCodeWithFormat(codes.group);

	return (
		<>
			<Highlight filename="Icon.tsx" code={ icon } />
			<Highlight filename="PageTitle.tsx" code={ pageTitle } />
			<Highlight filename="types.ts" code={ types } />
			<Highlight filename="Group.tsx" code={ group } />
		</>
	)
}
