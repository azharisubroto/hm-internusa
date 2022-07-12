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
    <NextSeo {...nextSeoProps} />
    <main>{children}</main>
    <Footer />
  </Page>
);

export default LayoutDefault;
