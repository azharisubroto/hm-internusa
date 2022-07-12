import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface ILayoutDefault {
  children?: React.ReactNode;
  pageTitle?: string;
  nextSeoProps?: Partial<NextSeoProps>;
}

const LayoutDefault = ({ children, nextSeoProps, ...rest }: ILayoutDefault) => (
  <Page {...rest}>
    <NextSeo {...nextSeoProps} />
    <Header />
    <main>{children}</main>
    <Footer />
  </Page>
);

export default LayoutDefault;
