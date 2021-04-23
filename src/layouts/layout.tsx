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
import './layout.less';
import Seo from './Seo';

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

  const { title, githubUrl, contact, author } = data.site.siteMetadata;

  return (
    <>
      <Seo title={title} />
      <Header siteTitle={title} themeSwitcher={false} />
      <main style={mainStyle}>{children}</main>
      <Footer author={author} githubUrl={githubUrl} contact={contact} />
    </>
  );
};

export default Layout;
