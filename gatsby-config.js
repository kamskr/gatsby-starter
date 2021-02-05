const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Medrefer`,
        description: ``,
        author: `AllBright`,
        defaultLanguage: 'en',
        supportedLanguages: ['en', 'de'],
    },
    plugins: [
        `gatsby-plugin-typescript`,
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                '@': path.join(__dirname, 'src'),
                static: path.join(__dirname, 'static'),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `static`,
                path: path.join(__dirname, 'static'),
            },
        },
        {
            resolve: `gatsby-plugin-ts`,
            options: {
                tsLoader: {
                    logLevel: `warn`,
                },
                forkTsCheckerPlugin: {
                    eslint: true,
                },
                codegen: false,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
