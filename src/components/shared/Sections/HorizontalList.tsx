import clsx from "clsx";
import type { DeepGuard } from "@/_global/types/types";
import type { UListAttributes } from "@/_global/types/components";
import "./HorizontalList.sass";

export default function HorizontalList(props: DeepGuard<UListAttributes>) {
	return (
		<ul { ...props } className={ clsx('horizontal_list', props.className) }>
			{ props.children }
		</ul>
	)
}
