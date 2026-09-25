import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
import Page from "@/components/routes/archives/Page";

export const metadata = buildSiteMeta({ dir: '/archives' });

export default function PageArchives() {
	return <Page />;
}
