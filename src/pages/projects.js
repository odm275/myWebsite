import React, { Component } from 'react'
import Link from 'gatsby-link'

const ProjectPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>
        <img
          src={node.featuredImage.resolutions.src}
          style={{ width: '100%' }}
        />
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
      <p style={{ color: '#c9c9c9' }}>{node.shortPreview}</p>
    </li>
  )
}

const ProjectPage = ({ data }) => {
  let projectStyle
  if (data.allContentfulProject.edges.length > 1) {
    projectStyle = {
      display: 'grid',
      justifyItems: 'stretch',
      gridRowGap: '30px',
      gridColumnGap: '30px',
      gridTemplateColumns: '1fr 1fr',
      listStyleType: 'none',
      marginLeft: 0,
    }
  } else {
    projectStyle = {
      listStyleType: 'none',
      marginLeft: 0,
    }
  }

  return (
    <div
      style={{
        paddingTop: '20px',
      }}
    >
      <ul style={projectStyle}>
        {data.allContentfulProject.edges.map(edge => (
          <ProjectPost node={edge.node} />
        ))}
      </ul>
    </div>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query projectsQuery {
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
