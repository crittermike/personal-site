module.exports = {
    siteMetadata: {
        title: 'Mike Crittenden',
        author: 'Mike Crittenden',
        description: 'Ramblings and links from Mike Crittenden.',
        siteUrl: 'https://mikecr.it/',
    },
    plugins: [
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: `keyYgvb4WpsvOrPTY`,
                baseId: `appAX239psDPoqnhx`,
                tableName: `Posts`,
                tableView: `Published`,
                queryName: `Posts`
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `cardo`,
                    `josefin sans`
                ]
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-images',
                    `gatsby-remark-responsive-iframe`,
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        `gatsby-plugin-feed`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
    ],
}
