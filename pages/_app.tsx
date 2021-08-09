import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

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
			<Global
				styles={css`
					body {
						background-color: #f7fafc;
					}

					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						max-width: 600px;
						margin: 0 auto;
						padding: 16px;
					}
				`}
			/>
		</ChakraProvider>
	);
};

export default App;
