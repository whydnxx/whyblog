import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { META_DATA } from '@constants/site';
import { Meta } from '@interfaces/index';
import Navbar from '@components/navbar';

type Props = {
  children?: ReactNode;
  meta?: Meta;
};

export default function Layout({ children, meta = META_DATA }: Props) {
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-dark">
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content={meta.title} />
        <meta itemProp="description" content={meta.description} />
        <meta itemProp="image" content={meta.image} />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content={meta.siteUrl + router.asPath} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:site_name" content={meta.siteName} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="canonical" href={meta.siteUrl + router.asPath} />
      </Head>
      <main id="skip" className="antialiased">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          {children}
        </div>
      </main>
    </div>
  );
}
