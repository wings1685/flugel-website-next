import { siteDescription, siteTitle } from "./shared";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import type { Metadata } from "next/types";

export const sleep = (ms: number): Promise<number> => {
	return new Promise(resolve => {
		const timeoutID = window.setTimeout(() => resolve(timeoutID), ms);
	});
}

type Props = {
	title?: string;
	description?: string;
};
export const buildMeta = (props: Props): Metadata => {
	const separator = ' | ';
	const title = props.title ? `${props.title}${separator}${siteTitle}` : siteTitle;
	const description = props.description ?? siteDescription;

	const SocialMetaData: OpenGraph = {
		title: title,
		description: description,
		siteName: siteTitle,
	};
	const data: Metadata = {
		title: title,
		description: description,
		openGraph: SocialMetaData,
		twitter: {
			...SocialMetaData,
			card: 'summary_large_image',
		},
	};

	return data;
};

export const unescapeTag = (text: string) => text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
