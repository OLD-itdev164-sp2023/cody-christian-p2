import React from "react"
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({ data }) => {
    const { members, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home" />
            <h1>About Tigera</h1>
            <div>
                <StaticImage 
                src="../images/1.jpg"
                //width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Tigera Photo From Chill on the Hill"
                style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <p>{`${company} is comprised of ${members}.`}</p>
            <p>Established in 2021, Tigera is an Alternative Pop Rock quintet based out of Milwaukee, WI. 
                Taking inspiration from the forerunners of the Garage Rock revival of the early 00’s and Pop Rock outfits of the 70’s and 80’s, 
                Tigera has developed a unique sound that flirts with danceable disco-adjacent grooves and over-the-top rock machismo. 
            </p>
            <p>In their short time writing and performing together, Tigera released a two part EP, aptly titled, Part I (2021)  and Part II (2022.) Their music tackles themes of love and self reflection in a seemingly autobiographical way. 

                Six short months after the band’s first show,  they were voted Best Rock Band in the Shepherd Express’ “Best Of Milwaukee 2021 and 2022" write-in voting competitions. 
                They’ve performed various major regional festival spots including Summer Soulstice 2022, Chill On the Hill 2022, Electric Love Festival 2022, and SummerFest 2022. 
            </p>           
            <Link to="/">Home</Link>          
        </Layout>
    )
}

export default About

export const query = graphql`
query {
  site {
    siteMetadata {
      contact {
        company
        name
        members
      }
    }
  }
}
`