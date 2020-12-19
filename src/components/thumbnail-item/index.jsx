import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      {/* <Img fluid={node.frontmatter.featuredImage.childImageSharp.sizes} /> */}
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <br />
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
