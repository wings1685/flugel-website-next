import { buildMeta } from "@/_global/lib/utils";
import Page from "@/components/routes/archives/Page";

export const metadata = buildMeta({ title: 'Archives' });

export default function PageArchives() {
	return <Page />;
}
