import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { usePageContext } from '@/contexts/PageContext';

const Link = ({ to, ref, ...rest }) => {
    const { lang } = usePageContext();

    return <GatsbyLink {...rest} to={`/${lang}${to}`} />;
};

export default Link;