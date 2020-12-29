import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <Img fluid={node.frontmatter.featuredImage.childImageSharp.sizes} />
      {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
      {/* <br /> */}
    </div>
  </Link>
)
