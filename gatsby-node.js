const config = require('./gatsby-config');
/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({
    page,
    actions: { createPage, deletePage },
}) => {
    // Delete the original page (since we are gonna create localized versions of it)
    await deletePage(page);

    // Create one page for each locale
    await Promise.all(
        config.siteMetadata.supportedLanguages.map(async (lang) => {
            const originalPath = page.path;
            const localizedPath = `/${lang}${page.path}`;

            await createPage({
                ...page,
                path: localizedPath,
                context: {
                    ...page.context,
                    originalPath,
                    lang,
                },
            });
        })
    );
};
