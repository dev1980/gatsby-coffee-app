import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/BackgroundSection'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']}/>
<BackgroundSection img= {data.img.childImageSharp.fluid} title="Regular's Joe's" styleClass='default-background'/>
  </Layout>
);

export const query = graphql` 
{
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }  
}`; 
export default IndexPage
