import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const posts = this.props.data.allAirtablePosts.edges;

    return (
      <div>
        <Helmet title={siteTitle} />
        <Header />
        {posts.map(({ node }) => {
          const title = node.Title
          return (
            <div key={node.Slug}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={'ramblings/' + node.Slug}>
                  {title}
                </Link>
              </h3>
              <p><small>({node.Date}) {node.Subtitle}</small></p>
              <br /><br />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allAirtablePosts(sort: { fields: [Date], order: DESC }) {
      edges {
        node {
          Slug
          Title
          Subtitle
          Date
        }
      }
    }
  }
`
