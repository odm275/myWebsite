import React, { Component } from 'react'
import Link from 'gatsby-link'

const ProjectPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>
        <img src={node.featuredImage.resolutions.src} />
      </Link>
      <Link
        to={node.slug}
        style={{
          color: '#3b3a3a',
          textDecoration: 'none',
        }}
      >
        <p
          css={{
            marginTop: '5px',
            marginBottom: '5px',
            fontSize: '1.2rem',
            ':hover': {
              textDecoration: `underline`,
            },
          }}
        >
          {node.title}
        </p>
      </Link>
      <p
        style={{
          color: '#c9c9c9',
        }}
      >
        {node.shortPreview}
      </p>
    </li>
  )
}

const ProjectPage = ({ data }) => {
  console.log(data)
  return (
    <div
      style={{
        paddingTop: '20px',
      }}
    >
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          listStyleType: 'none',
        }}
      >
        {data.allContentfulProject.edges.map(edge => (
          <ProjectPost node={edge.node} />
        ))}
      </ul>
    </div>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query projectQuery {
    allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          shortPreview
          featuredImage {
            resolutions(width: 400, height: 400) {
              src
            }
          }
        }
      }
    }
  }
`
