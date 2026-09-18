import clsx from "clsx";
import type { DeepGuard } from "@/_global/types/types";
import type { SectionAttributes } from "@/_global/types/components";
import "./Section.sass";

export default function Section(props: DeepGuard<SectionAttributes>) {
	return (
		<section { ...props } className={ clsx('section', props.className) }>
			{ props.children }
		</section>
	)
}
