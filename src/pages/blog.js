import React, { Component } from 'react'
import Link from 'gatsby-link'

const BlogPost = ({ node }) => {
  return (
    <li style={{}}>
      <Link to={node.slug}>
        <img src={node.featuredImage.resolutions.src} />
      </Link>
      <header>
        <Link to={node.slug}>
          <h2>{node.title}</h2>
        </Link>
        <time>{node.publishDate}</time>
      </header>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const BlogPage = ({ data }) => (
  <div>
    <ul
      css={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {data.allContentfulBlog.edges.map(edge => <BlogPost node={edge.node} />)}
    </ul>
  </div>
)

export default BlogPage

export const pageQuery = graphql`
  query blogQuery {
    allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          publishDate
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            resolutions(width: 600, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
