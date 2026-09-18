import { buildMeta } from "@/_global/lib/utils";
import { About, Blog, Terms } from "./_parts";

export const metadata = buildMeta({ title: 'Home' });

export default function Page() {
	return (
		<main>
			<About />
			<Blog />
			<Terms />
		</main>
	)
}
