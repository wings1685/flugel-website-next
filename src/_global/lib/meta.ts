import * as v from "valibot";
import type { DeepGuard } from "../types/types";
import type { Metadata } from "next/types";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const MetaSchema = v.object({
	title: v.string(),
	description: v.optional(v.string()),
	ogImage: v.optional(v.string()),
});
export type SiteMeta = v.InferOutput<typeof MetaSchema>;
type PageMeta = Partial<SiteMeta>;

export type YamlFiles = Record<string, SiteMeta>;
type MetaInfo = Omit<SiteMeta, 'title'> & {
	titles: string[];
};

export type MetaProps = {
	dir?: string;
	meta?: PageMeta;
};
type Props = MetaProps & {
	globData: YamlFiles;
	rootDir: string;
};

const separator = ' | ';
const convertDirectoryArray = (dir: string) => {
	const dirs = dir.split('/');

	return dirs.filter((path, index) => path || index < dirs.length - 1).map(path => path ? `${path}/` : path);
};

export const buildMeta = (props: DeepGuard<Props>): Metadata => {
	const { dir = '/', meta, globData, rootDir } = props;
	const metaData: MetaInfo = { titles: [], description: '', ogImage: '' };

	const pagePaths = convertDirectoryArray(dir);
	const pagePath = pagePaths.slice(-1)[0];
	const globPaths = Object.keys(globData);

	let siteTitle: string = '';
	const setMeta = (data?: PageMeta, canOverrideTitle: boolean = true) => {
		if (!data) return;

		if (data.title && canOverrideTitle) metaData.titles = [ data.title, ...metaData.titles];
		if (data.title && !siteTitle) siteTitle = data.title;
		if (data.description) metaData.description = data.description;
		if (data.ogImage) metaData.ogImage = data.ogImage;
	};

	Object.values(pagePaths).forEach(path => {
		const yamlPath = `${rootDir}${path}_data/meta.yaml`;
		if (!globPaths.includes(yamlPath)) return;

		const data = globData[yamlPath];
		v.parse(MetaSchema, data);

		const canOverrideTitle = !meta?.title || path !== pagePath;
		setMeta(data, canOverrideTitle);
	});
	setMeta(meta);

	const title = metaData.titles.join(separator);
	const openGraph: OpenGraph = {
		title: title,
		description: metaData.description,
		siteName: siteTitle,
		images: metaData.ogImage ?? undefined,
	};
	const data: Metadata = {
		title: title,
		description: metaData.description,
		openGraph,
		twitter: {
			...openGraph,
			card: 'summary_large_image',
		},
	};

	return data;
};
