import React from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { usePageContext } from '../contexts/PageContext';

export const LanguagePicker = () => {
  const { originalPath } = usePageContext();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            supportedLanguages
          }
        }
      }
    `
  );

  return (
    <div className="language-selector-container">
      {site.siteMetadata.supportedLanguages.map(supportedLang => (
        <GatsbyLink
          aria-label={`Change language to ${supportedLang}`}
          to={`/${supportedLang}${originalPath}`}
        >
          {supportedLang.toUpperCase()}
        </GatsbyLink>
      ))}
    </div>
  );
};
