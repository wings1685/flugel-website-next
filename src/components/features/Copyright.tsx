"use client";

import { flugel } from "@/_global/lib/shared";

export default function Copyright() {
	const year = (new Date()).getFullYear();

	return (
		<p className="copyright monospace">{ flugel } &copy; { year }</p>
	)
}
