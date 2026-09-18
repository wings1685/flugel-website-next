"use client";

import clsx from "clsx";
import { useStore } from "@/_global/piquo";
import type { Months } from "@/_global/lib/shared";
import type { DeepGuard } from "@/_global/types/types";
import type { ButtonAttributes } from "@/_global/types/components";
import "@/components/shared/Sections/Glass.sass";

type Props = ButtonAttributes & {
	month: Months;
	name: string;
};

export default function NavButton(props: DeepGuard<Props>) {
	const { selectedMonth$ } = useStore('selectedMonth');

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: Months) => {
		e.preventDefault();

		if (selectedMonth$.get()) return;

		selectedMonth$.set(key);
	};
	return (
		<button onClick={ e => handleClick(e, props.month) } className={ clsx('glass mini is_dark btn_nav', props.className) }>{ props.name }</button>
	)
}
