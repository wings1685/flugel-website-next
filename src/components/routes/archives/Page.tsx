import { Archives, Environment } from "./_parts";
import { buildMeta } from "@/_global/lib/utils";

export const metadata = buildMeta({ title: 'Archives' });

export default function Page() {
	return (
		<main>
			<Environment />
			<Archives />
		</main>
	)
}
