/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head></Head>
      <title>@hirowf</title>
      <body className='bg-gray-100 dark:bg-[#141517] text-black dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
