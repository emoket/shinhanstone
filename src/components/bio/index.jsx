import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              {/* <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              /> */}
              <div className="author-name">
                {/* <span className="author-name-prefix">Written by</span> */}
                {/* <Link to={'/about'} className="author-name-content">🏢 기업소개</Link> */}
                <a href="https://smartstore.naver.com/shstone" target="_blank" className="author-name-content">🧺 제품 구매하러 가기</a>
                <br />
                <a href="tel:031-765-4723" className="author-name-content">📞 031-765-4723</a>
                <a className="author-name-content">📠 031-765-4724</a>
                <a href="mailto:shstonekr@naver.com?subject=제품문의" className="author-name-content">📧 shstonekr@naver.com</a>
                <div><a href="https://map.naver.com/v5/entry/place/19699978?c=14171022.5553446,4491796.8862785,15,0,0,0,dh&placePath=%2Fhome%3Fentry=plt" target="_blank" className="author-name-content">🗺️ 찾아가기</a> 경기도 광주시 초월읍 장담길 88-4(용수리 423-4)</div>
                {/* <div>📞 031-765-4723  |  📠 031-765-4724  |  📧 shstonekr@naver.com</div> */}

                {/* <div className="author-introduction">{introduction}</div> */}
                <p className="author-socials">
                  {social.github && (
                    <a href={`https://github.com/${social.github}`}>GitHub</a>
                  )}
                  {social.medium && (
                    <a href={`https://medium.com/${social.medium}`}>Medium</a>
                  )}
                  {social.twitter && (
                    <a href={`https://twitter.com/${social.twitter}`}>
                      Twitter
                    </a>
                  )}
                  {social.facebook && (
                    <a href={`https://www.facebook.com/${social.facebook}`}>
                      Facebook
                    </a>
                  )}
                  {social.linkedin && (
                    <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
                      LinkedIn
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
        }
      }
    }
  }
`

export default Bio
