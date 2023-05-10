import * as React from "react"
import  { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css"

const Upcoming = ({ data }) => (
    <Layout>
        <Seo title="Shows" />
        <ul className={styles.list}>
            {
                data.allContentfulUpcomingShows.edges.map(edge => (
                    <li key={edge.node.id}>
                        <div>
                            {edge.node.showDate}
                        </div>
                        <Link to={edge.node.slug}>{edge.node.slug}</Link>
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
export const query = graphql`
{
    allContentfulUpcomingShows {
        edges {
            node {
                title
                showDate
                slug
                heroImage {
                    gatsbyImageData(
                        layout: CONSTRAINED,
                        placeholder: BLURRED,
                        width: 300
                    )
                }
                description {
                    childMarkdownRemark {
                        excerpt
                    }
                }
            }
        }
    }
}
`