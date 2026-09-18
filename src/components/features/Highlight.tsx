"use client";

import type { DeepGuard } from "@/_global/types/types";
import "./Highlight.sass";

type Props = {
	code: string;
	filename?: string;
};

export default function Highlight(props: DeepGuard<Props>) {
	return (
		<div className="code_highlight">
			{props.filename && (
				<p className="filename monospace">{ props.filename }</p>
			)}
			<div className="shiki_wrapper" dangerouslySetInnerHTML={ { __html: props.code } } />
		</div>
	)
}
