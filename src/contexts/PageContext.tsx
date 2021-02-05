import React from 'react';
import { useTranslation } from 'react-i18next';

const PageContext = React.createContext({});

export const PageContextProvider = ({ pageContext, children }) => {
    const { i18n } = useTranslation();
    i18n.changeLanguage(pageContext.lang);

    return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>;
};

export const usePageContext = () => React.useContext(PageContext);