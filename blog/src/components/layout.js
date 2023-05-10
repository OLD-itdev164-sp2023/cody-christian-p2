/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'

import { TigeraPurple } from "./themes/TigeraPurple"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={TigeraPurple}>
      <Header siteTitle={data.site.siteMetaData.title || `Title`} />
      <Content>
        <main>{children}</main>
        <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
        >
          {new Date().getFullYear()} &middot; Built with{' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Content>
    </ThemeProvider>
  )
}

export default Layout
