import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
import Page from "@/components/routes/error/Page";

export const metadata = buildSiteMeta({ dir: '/error', meta: { title: '404 Not Found' } });

export default function PageError() {
	return <Page />;
}
