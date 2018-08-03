import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProjectPost extends Component {
  render() {
    const { title, description } = this.props.data.contentfulProject
    return (
      <div>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </div>
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
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
