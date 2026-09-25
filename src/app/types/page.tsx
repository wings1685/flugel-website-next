import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
import Page from "@/components/routes/types/Page";

export const metadata = buildSiteMeta({ dir: '/types' });

export default function PageTypes() {
	return <Page />;
}
