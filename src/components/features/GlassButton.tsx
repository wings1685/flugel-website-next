"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useStore } from "@/_global/piquo";
import type { ReactNode } from "react";
import type { DeepGuard } from "@/_global/types/types";
import type { AsLink, AsDiv } from "@/_global/types/components";
import "@/components/shared/Sections/Glass.sass";

type Props = {
	children: ReactNode;
} & ( | (AsLink & {
	href: string;
	target?: '_blank';
}) | (AsDiv & {
	as: 'div';
	href?: never;
	target?: never;
}));

export default function GlassButton({
	as = 'a',
	children,
	...rest
}: DeepGuard<Props>) {
	const { navOpened$ } = useStore('navOpened');
	const pathname = usePathname();

	const handleClick = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e) {
			e.preventDefault();
			navOpened$.set(!navOpened$.get());
		} else {
			navOpened$.set(false);
		}
	};
	const isActive = useMemo(() => {
		if (!rest.href) return false;

		return rest.href === pathname;
	}, [ pathname, rest.href ]);

	if (as === 'a') {
		return (
			<Link href={ rest.href ?? '' } target={ rest.target } onClick={ () => handleClick() } className={ clsx('glass mini is_dark', { active: isActive }, rest.className) }>
				{ children }
			</Link>
		)
	}

	return (
		<div id={ rest.id ?? undefined } onClick={ e => handleClick(e) } className={ clsx('glass mini is_dark', rest.className) }>
			{ children }
		</div>
	)
}
