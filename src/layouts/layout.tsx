/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import Seo from './seo';
import './layout.less';

type Props = {
  mainStyle?: React.CSSProperties;
};

const Layout: React.FC<Props> = ({ children, mainStyle = {} }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          author
          contact
        }
      }
    }
  `);

  const { title, githubUrl, author, contact } = data.site.siteMetadata;

  return (
    <>
      <Seo title="ThemeSet | AntV" />
      <Header siteTitle={title} githubUrl={githubUrl} />
      <main style={mainStyle}>{children}</main>
      <Footer author={author} contact={contact} />
    </>
  );
};

export default Layout;
