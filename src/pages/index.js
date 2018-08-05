import React, { Component } from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ProjectPage from './projects'
class Intro extends Component {
  render() {
    let bounce = css.keyframes({
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.2)' },
      '100%': { transform: 'scale(1)' },
    })
    return (
      <section
        className="intro"
        css={{
          width: 'auto',
          height: '95vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p
          css={{
            fontSize: '1.8rem',
            lineHeight: '2.6rem',
          }}
        >
          Hey, I'm a software developer from Houston, Texas. I can help you
          build your next product.
        </p>
        <p
          css={{
            padding: 0,
          }}
        >
          I design, build, &amp; operate full-stack web applications.
        </p>
        <p
          css={{
            padding: 0,
          }}
        >
          Have a project you'd like to discuss?
        </p>
        <p
          css={{
            padding: 0,
            margin: 0,
            lineHeight: '2.3rem',
          }}
        >
          Let's chat <a href="">pomejia@gmail.com</a>
        </p>
        <FontAwesomeIcon
          icon={faAngleDown}
          size="2x"
          style={{ alignSelf: 'flex-end', animation: `${bounce} 2s infinite` }}
        />
      </section>
    )
  }
}

//data.allContentfulBlog.edges
const FeaturedProjects = ({ data }) => {
  // graphql query
  return (
    <section>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Recent Work</div>
        <div>
          <a href="">View All</a>
        </div>
      </nav>
      <ProjectPage data={data} />
    </section>
  )
}

const Skills = ({ node }) => (
  <div
    className="skills"
    style={{
      display: 'flex',
    }}
  >
    <div>
      <p
        style={{
          fontSize: '1.5rem',
          lineHeight: '3rem',
        }}
      >
        I understand the challenges of working independetly &amp; in a group.
        Here’s a couple of things I’m good at.
      </p>
    </div>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.2rem',
        listStyleType: 'none',
      }}
    >
      <li>
        Organization
        <br />
      </li>
      <li>Time Keeping</li>
      <li>Project Management</li>
      <li>Communication</li>
    </ul>
  </div>
)

const Social = () => {
  const social = [
    {
      github: 'https://github.com/odm275',
      freecodecamp: 'https://www.freecodecamp.org/odm275',
      codepen: 'https://codepen.io/omejia/#',
    },
  ]
  return (
    <div>
      <div>social</div>
    </div>
  )
}

const HireMe = () => (
  <div>
    <div>
      So are you looking for a professional, communicative &amp; punctual
      software engineer with adaptative full-stack web development skills for
      your next project?
    </div>
    <h3>
      If you have an application you are interested in developing with web
      technology, I’d love to work with you on it. I’m a full-stack developer
      which means I can bring your project from <b>concept to completion</b>. I
      work primarily with Node.js on the back-end and React on the front-end but
      picking up new languages or frameworks isn’t a problem.
    </h3>
  </div>
)

const IndexPage = ({ data }) => {
  return (
    <div>
      <Intro />
      <FeaturedProjects data={data} />
      <Skills />
    </div>
  )
}

export default IndexPage

export const featuredProjectsQuery = graphql`
  query featuredProjectsQuery {
    allContentfulProject(filter: { featured: { eq: true } }) {
      edges {
        node {
          title
          slug
          customer
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
