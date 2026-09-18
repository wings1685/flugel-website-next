"use client";

import { useEffect, useState } from "react";
import { fetchEntries } from "@/components/routes/_models/usePage";
import { GlassButton } from "@/components/features";
import type { BlogEntries } from "@/components/routes/_models/schema";
import type { ReactNode } from "react";
import type { DeepGuard } from "@/_global/types/types";
import "@/components/shared/Typography/Paragraph.sass";

type Props = {
	children: ReactNode;
};

export default function Entries(props: DeepGuard<Props>) {
	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	const [ entries, setEntries ] = useState<BlogEntries>([...Array(5)].map((i, index) => ({
		title: '**********',
		link: `${index}`,
		published: `2026-01-01 00:00:00`,
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	})));

	useEffect(() => {
		const getEntries = async () => {
			setEntries([ ...await fetchEntries() ]);
		};
		getEntries();
	}, []);

	return (
		<>
			{entries.map(entry => (
				<li key={ entry.link }>
					<article>
						<GlassButton as="a" href={ entry.link } target="_blank">
							<p>{ entry.title }</p>
							{ props.children }
						</GlassButton>
						<span className="published">{ formatDate(entry.published) }</span>
						<p className="paragraph summary">{ entry.summary }</p>
					</article>
				</li>
			))}
		</>
	)
}
