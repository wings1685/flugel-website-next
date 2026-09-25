/* eslint-disable @next/next/no-page-custom-font */
import { Footer, Header, Nav } from "@/components/shared/Sections";
import { Bg } from "@/components/features";

import type { ReactNode } from "react";
import type { DeepGuard } from "@/_global/types/types";

import "@/_global/styles/global.sass";

type Props = {
	children: ReactNode;
}

export default function RootLayout(props: DeepGuard<Props>) {
	return (
		<html lang="ja">
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.png" />
				<link rel="apple-touch-icon" href="/favicon.png" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400&display=swap" />
			</head>
			<body>
				<Header />
				{ props.children }
				<Nav />
				<Footer />
				<Bg />
			</body>
		</html>
	);
}
