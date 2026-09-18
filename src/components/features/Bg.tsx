"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useObserve } from "@legendapp/state/react";
import { months } from "@/_global/lib/shared";
import { sleep } from "@/_global/lib/utils";
import { useStore } from "@/_global/piquo";
import type { Months } from "@/_global/lib/shared";
import "./Bg.sass";

export default function Bg() {
	const [ currentMonth, setCurrentMonth ] = useState<Months>(months[(new Date()).getMonth()]);
	const animationDelay = useRef(0);
	const [ nextMonth, setNextMonth ] = useState<Months>();
	const { selectedMonth$ } = useStore('selectedMonth');

	const elBg = useRef<HTMLImageElement>(null);
	const getSrcset = (month?: Months) => {
		if (typeof window !== 'undefined' && month) {
			return window.innerWidth <= 768 ? `/images/bg/${ month }_sp.webp` : `/images/bg/${ month }.webp`;
		} else {
			return `/images/bg/${ month }.webp`;
		}
	};

	useObserve(() => {
		const next = selectedMonth$.get();
		if (!elBg.current || !next) return;

		if (!('computedStyleMap' in elBg.current)) {
			setCurrentMonth(next);
			return;
		}

		const style = elBg.current.computedStyleMap();
		const duration = style.get('animation-duration') as CSSUnitValue;
		const delay = duration.value * 1000;
		animationDelay.current = delay;
		setNextMonth(next);
	});

	useEffect(() => {
		if (!nextMonth) return;

		const animated = async () => {
			await sleep(animationDelay.current);

			setCurrentMonth(nextMonth);
			setNextMonth('');
			selectedMonth$.set('');
		};
		animated();
	}, [ nextMonth, selectedMonth$ ]);

	return (
		<div id="bg">
			<Image ref={ elBg } alt="" src={ getSrcset(currentMonth) } width={ 0 } height={ 0 } />
			{selectedMonth$.get() && (
				<Image id="selected_bg" src={ getSrcset(selectedMonth$.get()) } alt="" width={ 0 } height={ 0 } />
			)}
		</div>
	)
}
