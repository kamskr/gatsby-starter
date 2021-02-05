import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import i18n from 'i18next';
import { Header } from './Header';
import './default-layout.css';
import SEO from '@/layouts/seo';

interface LayoutProperties {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProperties): JSX.Element => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <SEO title={data.site.siteMetadata.title} lang={i18n.language} />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

