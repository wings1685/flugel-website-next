import { codes } from "./_models/codeDeepGuard";
import { getHighlightedCodeWithFormat } from "./_models/usePage";
import Highlight from "./Highlight";

export default async function DeepGuardCode() {
	const types = await getHighlightedCodeWithFormat(codes.types);
	const glass = await getHighlightedCodeWithFormat(codes.glass);

	return (
		<>
			<Highlight v-if="codeDeepGuard" filename="types.ts" code={ types } />
			<Highlight v-if="codeGlass" filename="Glass.tsx" code={ glass } />
		</>
	)
}
