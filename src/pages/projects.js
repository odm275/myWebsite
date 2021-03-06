import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './project.module.css'

const ProjectPost = ({ node }) => {
  const text = {
    color: 'white',
    fontSize: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  }
  const { container } = styles
  const techsList = node.technologies.split(';').map(tech => <p>{tech}</p>)
  return (
    <li>
      <div className={container}>
        <Link to={node.slug}>
          <img
            src={node.featuredImage.resolutions.src}
            style={{ width: '100%' }}
          />
        </Link>
        <Link to={node.slug}>
          <div className={styles[node.slug]}>
            <div style={text}>{techsList}</div>
          </div>
        </Link>
      </div>

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
        {data.allContentfulProject.edges
          .sort((a, b) => b.node.rating - a.node.rating)
          .map((edge, index) => {
            return (
              <div>
                <ProjectPost node={edge.node} />
              </div>
            )
          })}
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
          rating
          shortPreview
          technologies
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
