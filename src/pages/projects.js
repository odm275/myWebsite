import React, { Component } from 'react'
import Link from 'gatsby-link'

const ProjectPost = ({ node }) => {
  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to={node.slug}>
        <img src={node.featuredImage.resolutions.src} />
      </Link>
      <Link to={node.slug}>
        <h2>{node.title}</h2>
      </Link>
      <div>{node.description.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const ProjectPage = ({ data }) => (
  <div>
    <ul
      css={{
        textAlign: 'center',
      }}
    >
      {data.allContentfulProject.edges.map(edge => (
        <ProjectPost node={edge.node} />
      ))}
    </ul>
  </div>
)

export default ProjectPage

export const pageQuery = graphql`
  query projectQuery {
    allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          description {
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
