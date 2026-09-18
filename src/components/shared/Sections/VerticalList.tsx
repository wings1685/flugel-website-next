import clsx from "clsx";
import type { DeepGuard } from "@/_global/types/types";
import type { UListAttributes } from "@/_global/types/components";
import "./VerticalList.sass";

export default function VerticalList(props: DeepGuard<UListAttributes>) {
	return (
		<ul { ...props } className={ clsx('vertical_list', props.className) }>
			{ props.children }
		</ul>
	)
}
