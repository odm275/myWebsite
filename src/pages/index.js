import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
const Intro = ({ smallIntro, longIntro }) => (
  <div>
    <h2>Long intro</h2>
    <h3>Small Intro</h3>
  </div>
)

const RecentWork = ({ node }) => {
  return (
    <div>
      <p>lol</p>
    </div>
  )
}

const Skills = ({ node }) => (
  <div>
    <div>hey</div>
  </div>
)

const FeaturedProject = ({ node }) => (
  <div>
    <div />
  </div>
)

const Social = ({ node }) => (
  <div>
    <div>social</div>
  </div>
)

const HireMe = ({ node }) => (
  <div>
    <div>Hire me</div>
  </div>
)

const IndexPage = ({ data }) => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default IndexPage
