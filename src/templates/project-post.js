import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './project-post.module.css'

class ProjectPost extends Component {
  render() {
    const {
      title,
      description,
      customer,
      link,
      repo,
      year,
      technologies,
    } = this.props.data.contentfulProject
    const {
      projectContainer,
      projectSpecs,
      projectPost,
      categoryColor,
    } = styles

    const categories = [{ link: link }, { technologies: technologies }]

    return (
      <main className={projectContainer}>
        <aside>
          <p className={projectSpecs} style={{ fontSize: '1.2rem' }}>
            {title}
          </p>
          <p style={{ fontSize: '1.1rem', color: '#c9c9c9' }}>{customer}</p>
        </aside>
        <article
          className={projectPost}
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </main>
    )
  }
}

ProjectPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPost

export const pageQuery = graphql`
  query projectPostQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      customer
      link
      repo
      year
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
