import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
import Page from "@/components/routes/Page";

export const metadata = buildSiteMeta();

export default function PageHome() {
	return <Page />;
}
