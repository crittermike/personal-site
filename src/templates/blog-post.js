import React from 'react'
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.airtablePosts;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const { previous, next } = this.props.pathContext;

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
                <hr />

                <ul>
                    {previous && (
                        <li><Link to={previous.Slug} rel="prev">← {previous.Title}</Link></li>
                    )}

                    {next && (
                        <li><Link to={next.Slug} rel="next">{next.Title} →</Link></li>
                    )}
                </ul>
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
