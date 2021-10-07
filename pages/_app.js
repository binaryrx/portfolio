import { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from "@/theme/GlobalStyle";
import { ThemeProvider } from 'next-themes';
import { Header } from "../components"


function Portfolio({ Component, pageProps, router }) {
	const url = `https://stg.sh/${router.route}`;



	useEffect(() => {
	

		if (typeof window !== "undefined") {
			const WebFont = require("webfontloader");

			WebFont.load({
				google: {
					families: [`Roboto:300,400,500,700`]
				}
			});
		}

	}, []);


	return (
		<>
			<ThemeProvider defaultTheme="dark">
				<GlobalStyle />
					<Header />
					<AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
						<Component {...pageProps} canonical={url} key={url} />
					</AnimatePresence>
			</ThemeProvider>
		</>
	);
}


export default Portfolio
