import React from 'react'

import PropTypes from 'prop-types'

import './centered-container1.css'

const CenteredContainer1 = (props) => {
  return (
    <div id="price" className="centered-container1-centered-container">
      <div className="centered-container1-heading">
        <span className="centered-container1-text title">{props.text}</span>
        <span className="centered-container1-text01">{props.text1}</span>
        <div className="centered-container1-selection">
          <span className="centered-container1-text02 accordionContainer">
            {props.text16}
          </span>
          <span className="centered-container1-text03 accordionContainer button">
            {props.text17}
          </span>
        </div>
      </div>
      <div className="centered-container1-cards">
        <div className="centered-container1-card">
          <span className="centered-container1-text04">{props.text2}</span>
          <span className="centered-container1-text05">{props.text3}</span>
          <span className="centered-container1-text06">{props.text4}</span>
          <a
            href={props.linkGetStarted}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container1-link"
          >
            <div className="centered-container1-get-started template-button">
              <span className="centered-container1-text07">{props.text14}</span>
            </div>
          </a>
          <span className="centered-container1-text08">{props.text5}</span>
          <div className="centered-container1-bullet-points">
            <div className="centered-container1-point">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text09">
                <span>No. of Social Accounts- 5</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point01">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon02"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text12">
                <span>No. of Brand Accounts- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point02">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon04"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text15">
                <span>No. of Workspace Users- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point03">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon06"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text18">
                <span>No. of AI Credits- 10</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point04">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon08"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text21">
                <span>Workspace Store- 500 MB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point05">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon10"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text24">
                <span>No. of Scheduled  Posts- 10</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container1-card1">
          <span className="centered-container1-text27">{props.text18}</span>
          <span className="centered-container1-text28">{props.text7}</span>
          <span className="centered-container1-text29">{props.text8}</span>
          <a
            href={props.linkGetStarted1}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container1-link1"
          >
            <div className="centered-container1-get-started1 template-button">
              <span className="centered-container1-text30">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container1-text33">{props.text5}</span>
          <div className="centered-container1-bullet-points1">
            <div className="centered-container1-point06">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon12"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text34">
                <span>No. of Social Accounts- Unlimited</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point07">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon14"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text37">
                <span>No. of Brand Accounts- 2</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point08">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon16"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text40">
                <span>No. of Workspace Users- 5</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point09">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon18"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text43">
                <span>No. of AI Credits- 40</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point10">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon20"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text46">
                <span>Workspace Store- 2 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point11">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon22"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text49">
                <span>No. of Scheduled  Posts- 30</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container1-card2">
          <span className="centered-container1-text52">{props.text19}</span>
          <span className="centered-container1-text53">{props.text11}</span>
          <span className="centered-container1-text54">{props.text12}</span>
          <a
            href={props.linkGetStarted2}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container1-link2"
          >
            <div className="centered-container1-get-started2 template-button">
              <span className="centered-container1-text55">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container1-text58">{props.text13}</span>
          <div className="centered-container1-bullet-points2">
            <div className="centered-container1-point12"></div>
            <div className="centered-container1-point13">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon24"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text59">
                <span className="centered-container1-text60">
                  No. of Social Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point14">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon26"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text62">
                <span className="centered-container1-text63">
                  No. of Brand Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point15">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon28"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text65">{props.text15}</span>
            </div>
            <div className="centered-container1-point16">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon30"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text66">
                <span className="centered-container1-text67">
                  No. of AI Credits- 200
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point17">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon32"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text69">
                <span>Workspace Store- 5 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container1-point18">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container1-icon34"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container1-text72">
                <span className="centered-container1-text73">
                  No. of Scheduled  Posts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CenteredContainer1.defaultProps = {
  text: 'Pricing for all kind of businesses',
  text12: 'Upgrade to our Pro Plan for $65 per month  ',
  text3: '$25/mo($299/yr)',
  text2: 'Basic',
  text7: '$38/mo($450/yr)',
  linkGetStarted: 'https://app.connectaily.com/connectaily/register',
  text4: '$32/mo',
  text11: 'Upgrade to our Pro Plan for $55 per month  ',
  text19: 'Pro',
  text15: 'No. of Workspace Users- Unlimited',
  text17: 'Yearly',
  text1:
    'Create next-generation solutions for small business customers with pricing options that accommodate everyone.',
  text18: 'Essential',
  linkGetStarted2: 'https://app.connectaily.com/connectaily/register',
  text5: "What's included",
  text8: '$49/mo',
  text14: 'Start for free',
  linkGetStarted1: 'https://app.connectaily.com/connectaily/register',
  text13: "What's included",
  text16: 'Monthly',
}

CenteredContainer1.propTypes = {
  text: PropTypes.string,
  text12: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
  linkGetStarted: PropTypes.string,
  text4: PropTypes.string,
  text11: PropTypes.string,
  text19: PropTypes.string,
  text15: PropTypes.string,
  text17: PropTypes.string,
  text1: PropTypes.string,
  text18: PropTypes.string,
  linkGetStarted2: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
  text14: PropTypes.string,
  linkGetStarted1: PropTypes.string,
  text13: PropTypes.string,
  text16: PropTypes.string,
}

export default CenteredContainer1
