import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Active Online Software Page</title>
        <meta
          property="og:title"
          content="Page - Active Online Software Page"
        />
      </Helmet>
    </div>
  )
}

export default Page
