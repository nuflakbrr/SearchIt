import React from 'react'
import { Helmet } from "react-helmet";

const SEO = ({ title, description, url, siteName }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Naufal Akbar Nugroho" />
      <meta name="description" content={ description ? description : "SearchIt! is a search engine that helps you to find anything you want. You can search anything from Wikipedia, Google, Youtube, Twitter, Instagram, GitHub, etc." } />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description ? description : "SearchIt! is a search engine that helps you to find anything you want. You can search anything from Wikipedia, Google, Youtube, Twitter, Instagram, GitHub, etc." } />
      <meta property="og:url" content={ url } />
      <meta property="og:site_name" content={ siteName } />
      <title>{title ? title : "SearchIt! 🔍 | Naufal Akbar Nugroho"}</title>
      
    </Helmet>
  )
}

export default SEO