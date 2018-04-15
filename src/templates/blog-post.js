import React from 'react'
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
import Helmet from 'react-helmet';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.airtablePosts;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={`${post.Title} | ${siteTitle}`} />
                <h1>{post.Title}</h1>
                <p><small>{post.Date}</small></p><br /><br /><br />
                <div dangerouslySetInnerHTML={{
                        __html: unified()
                            .use(markdown)
                            .use(html)
                            .processSync(post.Body)
                    }}
                />
            </div>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        airtablePosts(Slug: { eq: $slug }) {
            Slug
            Title
            Body
            Image {
                url
            }
            Date
        }
    }
`
