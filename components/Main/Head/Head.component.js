import React from 'react';
import Head from 'next/head';

function HeadComponent() {
  return (
    <Head>
      <title>Antonio F. Gasco - Frontend Practice</title>
      <meta
        name="description"
        content="Using frontendpractice.com challenges to improve my frontend skills"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/fonts/FuturaPT/FuturaPTBook.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/FuturaPT/FuturaPTMedium.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/FuturaPT/FuturaPTBold.otf"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
}

export default HeadComponent;
