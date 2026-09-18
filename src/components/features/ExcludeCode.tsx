import { codes } from "./_models/codeExclude";
import { getHighlightedCodeWithFormat } from "./_models/usePage";
import { unescapeTag } from "@/_global/lib/utils";
import Highlight from "./Highlight";

export default async function ExcludeCode() {
	const glass = await getHighlightedCodeWithFormat(unescapeTag(codes.glass));

	return (
		<Highlight filename="Glass.tsx" code={ glass } />
	)
}
