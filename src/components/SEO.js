import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/L-Letter-v7.svg" />
      <link rel="icon" type="image/svg+xml" href="/J-Letter-v7.svg" />
      <meta name="keywords" content="driving instructor, female driving instructor, DBS checked, 
      driving school, driving lessons, local instructor, package deals, learn to drive, 
      learning to drive, manchester area, north manchester area, pass plus options"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/L-Letter-v7.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      {children}
    </Helmet>
  );
}