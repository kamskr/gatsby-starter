import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PageContext = React.createContext({});

export const PageContextProvider = ({ pageContext, children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(pageContext.lang)
    }, [pageContext.lang, i18n])

    return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>;
};

export const usePageContext = () => React.useContext(PageContext);