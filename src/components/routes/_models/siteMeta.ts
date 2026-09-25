import fs from "fs";
import path from "path";
import { glob } from "glob";
import { load } from "js-yaml";
import { buildMeta } from "@/_global/lib/meta";
import type { DeepGuard } from "@/_global/types/types";
import type { YamlFiles, MetaProps, SiteMeta } from "@/_global/lib/meta";

const rootDir = 'src/components/routes/';
const metaPaths = await glob(`${rootDir}**/_data/meta.yaml`);
const globData: YamlFiles = Object.fromEntries(metaPaths.map(metaPath => {
	const filePath = path.resolve(process.cwd(), metaPath);
	const yamlContent = fs.readFileSync(filePath, 'utf8');
	const yamlData = load(yamlContent) as SiteMeta;

	return [ metaPath, yamlData ];
}));
export const buildSiteMeta = (props?: DeepGuard<MetaProps>) => {
	return buildMeta({ ...props ?? {}, globData, rootDir })
};
