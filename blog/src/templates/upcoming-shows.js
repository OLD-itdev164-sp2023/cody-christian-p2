import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";


const BlogPost = ({ data }) => {
    const { title, showDate, slug, heroImage, description } = data.contentfulBlogPost;

    return(
        <Layout>
            <h1>{title}</h1>
            <div>{showDate}</div>
            <div>{slug}</div>
            <div>{heroImage}</div>
            <div>{description}</div>
        </Layout>
    );
}


export default BlogPost;

export const pageQuery = graphql`

    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq $slug}) {
            title
            showDate
            slug
            heroImage
            description
        }
    }
`

