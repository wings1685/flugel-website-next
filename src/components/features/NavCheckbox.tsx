"use client";

import { useStore } from "@/_global/piquo";

export default function NavCheckbox() {
	const { navOpened$ } = useStore('navOpened');

	return (
		<input type="checkbox" checked={ navOpened$.get() } onChange={ () => {} } />
	)
}
