import React from 'react';
import Head from 'next/head';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import '../styles/index.scss';

import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => {
	return (
		<ChakraProvider>
			<Head>
				<title>StoryLine: Next.js 11 + Prisma</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
			<CSSReset />
		</ChakraProvider>
	);
};

export default appWithTranslation(App);
