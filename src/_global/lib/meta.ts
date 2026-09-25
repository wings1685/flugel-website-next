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
export type MetaData = SiteMeta & {
	siteTitle: string,
};

export type YamlFiles = Record<string, SiteMeta>;
type MetaInfo = Omit<MetaData, 'title'> & {
	titles: string[];
};

export type MetaProps = {
	dir?: string;
	meta?: PageMeta;
};
type Props = MetaProps & {
	rootDir: string;
	globData: YamlFiles;
	pageDirs: string[];
};

const separator = ' | ';
const convertDirectoryArray = (dir: string) => {
	const dirs = dir.split('/');

	return dirs.map(path => path ? `${path}/` : path);
};
const getPaths = (pageDirs: DeepGuard<Props['pageDirs']>, rootDir: string) => pageDirs.map(path => {
	const regex = new RegExp(rootDir, 'g');
	const dir = path.replace(regex, './');

	return `/${dir.split('/').slice(1, -1).join('/')}`;
});
const getParentDir = (dir: string) => dir.split('/').filter((d, i) => d || i === 0).slice(0, -1).join('/') || '/';
const getAvailableDirs = (paths: string[], dir: string) => {
	const parentDir = getParentDir(dir);

	return paths.filter(path => getParentDir(path) === parentDir);
};

export const buildMeta = (props: DeepGuard<Props>): Metadata => {
	const { dir = '', meta, rootDir, globData, pageDirs } = props;

	const paths = getPaths(pageDirs, rootDir);
	if (dir && !paths.includes(dir)) {
		const availableDirs = getAvailableDirs(paths, dir);
		console.error('Undefined directory, available directories: ', availableDirs);
	}
	const metaData: MetaInfo = { titles: [], description: '', ogImage: '', siteTitle: '' };

	const pagePaths = convertDirectoryArray(dir);
	const pagePath = pagePaths.slice(-1)[0];
	const globPaths = Object.keys(globData);

	const setMeta = (data?: PageMeta, canOverrideTitle: boolean = true) => {
		if (!data) return;

		if (data.title && canOverrideTitle) metaData.titles = [ data.title, ...metaData.titles];
		if (data.title && !metaData.siteTitle) metaData.siteTitle = data.title;
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
		siteName: metaData.siteTitle,
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
