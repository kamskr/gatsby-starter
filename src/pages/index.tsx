import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import Layout from '../layouts/default-layout';
import { LanguagePicker } from '../components/LanguagePicker'
import { useTranslation } from 'react-i18next';

const IndexPage = (): JSX.Element => {
    const { t } = useTranslation()
    return (
        <Layout>
            <h1>{t('siteMetadata.title')}</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <LanguagePicker />
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
};

export default IndexPage;
