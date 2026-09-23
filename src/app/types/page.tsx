import { buildMeta } from "@/_global/lib/utils";
import Page from "@/components/routes/types/Page";

export const metadata = buildMeta({ title: 'Types' });

export default function PageTypes() {
	return <Page />;
}
