import clsx from "clsx";
import type { DeepGuard } from "@/_global/types/types";
import type { ParagraphAttributes, DivAttributes } from "@/_global/types/components";
import "./Paragraph.sass";

type Props = (ParagraphAttributes & {
	as?: 'p';
}) | (DivAttributes & {
	as: 'div';
});

export default function Paragraph(props: DeepGuard<Props>) {
	const Component = props.as ?? 'p';

	return (
		<Component { ...props } className={ clsx('paragraph', props.className) }>
			{ props.children }
		</Component>
	)
}
