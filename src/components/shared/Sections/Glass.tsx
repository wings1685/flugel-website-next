import clsx from "clsx";
import { Section } from "./";
import type { DeepGuard } from "@/_global/types/types";
import type { DivAttributes, SectionAttributes } from "@/_global/types/components";
import "./Glass.sass";

type Props = {
	mini?: boolean;
	isDark?: boolean;
} & ( | (DivAttributes & {
	as?: 'div';
}) | (SectionAttributes & {
	as?: 'section';
}) );

export default function Glass(props: DeepGuard<Props>) {
	const Component = props.as === 'section' ? Section : props.as || 'div';

	return (
		<Component className={ clsx('glass', { mini: props.mini, is_dark: props.isDark }, props.className) }>
			{ props.children }
		</Component>
	)
}
