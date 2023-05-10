import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const Upcoming = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {
      data.allContenfulBlogPost.edges.map(edge => (
        <li key={edge.node.id}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>     
        <div>
          <GatsbyImage
            image={edge.node.heroImage.gatsbyImageData}
            />
        </div>
        <div>
          {edge.node.description.childMarkdownRemark.excerpt}
        </div>
        </li>
      ))
      }
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default Upcoming

export const query = graphql`
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              title
              slug
              description {
                childMarkdownRemark {
                  excerpt
                }
              }
              heroImage {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 300
                )
              }
            }
          }
        }
      }
`

