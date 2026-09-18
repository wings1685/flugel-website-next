import clsx from "clsx";
import type { DeepGuard } from "@/_global/types/types";
import type { DivAttributes } from "@/_global/types/components";
import "./Box.sass";

export default function Box(props: DeepGuard<DivAttributes>) {
	return (
		<div { ...props } className={ clsx('box', props.className) }>
			{ props.children }
		</div>
	)
}
