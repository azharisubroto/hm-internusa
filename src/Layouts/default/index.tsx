import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';

interface ILayoutDefault {
  children?: React.ReactNode;
  pageTitle?: string;
  nextSeoProps?: Partial<NextSeoProps>;
}

const LayoutDefault = ({ children, nextSeoProps, ...rest }: ILayoutDefault) => (
  <Page {...rest}>
    <NextSeo
      openGraph={{
        url: `https://www.url.ie/a`,
        title: `Harum Manis Internusa`,
        description: `Your ONE Stop Sourcing & Supplier for all your products`,
        images: [
          {
            url: `https://hm-internusa.my.id/images/coffee.jpeg`,
            width: 800,
            height: 600,
            alt: `Coffee`,
            type: `image/jpeg`
          }
        ],
        site_name: `hm-internusa.my.id`
      }}
      {...nextSeoProps}
    />
    <main>{children}</main>
    <Footer />
  </Page>
);

export default LayoutDefault;
