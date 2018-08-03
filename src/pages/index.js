import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
const Intro = () => (
  <section className="intro">
    <p
      css={{
        fontSize: '1.8rem',
        lineHeight: '2.6rem',
      }}
    >
      Hey, I'm a software developer from Houston, Texas. I can help you build
      your next product.
    </p>
    <div>
      <p
        css={{
          padding: 0,
          margin: '0 0 0.5rem 0',
        }}
      >
        I design, build, &amp; operate full-stack web applications.
      </p>
      <p
        css={{
          padding: 0,
          margin: '0 0 0.5rem 0',
        }}
      >
        Have a project you'd like to discuss?
      </p>
      <p
        css={{
          padding: 0,
          margin: 0,
        }}
      >
        Let's chat <a href="">pomejia@gmail.com</a>
      </p>
    </div>
  </section>
)

const RecentWork = ({ node }) => {
  // graphql query
  return (
    <div>
      <p>lol</p>
    </div>
  )
}

const Skills = ({ node }) => {
  const skills = [{}]
  return
  ;<div>
    <h2>
      I understand the challenges of working independetly &amp; in a group.
      Here’s a couple of things I’m good at.
    </h2>
    <ul>
      <li>Organization</li>
      <li>Time Keeping</li>
      <li>Project Management</li>
      <li>Communication</li>
    </ul>
  </div>
}

const FeaturedProject = ({ node }) => (
  //Graphql query
  <div>
    <div />
  </div>
)

const Social = ({ node }) => {
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

const HireMe = ({ node }) => (
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

const IndexPage = ({ data }) => (
  <div>
    <Intro />
  </div>
)

export default IndexPage
