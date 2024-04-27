import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './centered-container.css'

const CenteredContainer = (props) => {
  const [pricingSwitch, setPricingSwitch] = useState(1)
  return (
    <div id="price" className="centered-container-centered-container">
      <div className="centered-container-heading">
        <span className="centered-container-text title">{props.text}</span>
        {pricingSwitch === 2 && (
          <span className="centered-container-text01">{props.text1}</span>
        )}
        <div className="centered-container-selection">
          <span
            onClick={() => setPricingSwitch(2)}
            className="centered-container-text02 accordionContainer"
          >
            {props.text16}
          </span>
          <span
            onClick={() => setPricingSwitch(1)}
            className="centered-container-text03 accordionContainer button"
          >
            {props.text17}
          </span>
        </div>
      </div>
      <div className="centered-container-cards">
        <div className="centered-container-card">
          <span className="centered-container-text04">{props.text2}</span>
          {pricingSwitch === 1 && (
            <span className="centered-container-text05">{props.text3}</span>
          )}
          {pricingSwitch === 2 && (
            <span className="centered-container-text06">{props.text4}</span>
          )}
          <a
            href={props.linkGetStarted}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container-link"
          >
            <div className="centered-container-get-started template-button">
              <span className="centered-container-text07">{props.text14}</span>
            </div>
          </a>
          {pricingSwitch === 1 && (
            <span className="centered-container-text08">{props.text5}</span>
          )}
          <div className="centered-container-bullet-points">
            <div className="centered-container-point">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text09">
                <span>No. of Social Accounts- 5</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point01">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon02"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text12">
                <span>No. of Brand Accounts- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point02">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon04"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text15">
                <span>No. of Workspace Users- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point03">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon06"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text18">
                <span>No. of AI Credits- 10</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point04">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon08"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text21">
                <span>Workspace Store- 500 MB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point05">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon10"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text24">
                <span>No. of Scheduled  Posts- 10</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container-card1">
          <span className="centered-container-text27">{props.text18}</span>
          {pricingSwitch === 1 && (
            <span className="centered-container-text28">{props.text7}</span>
          )}
          {pricingSwitch === 2 && (
            <span className="centered-container-text29">{props.text8}</span>
          )}
          <a
            href={props.linkGetStarted1}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container-link1"
          >
            <div className="centered-container-get-started1 template-button">
              <span className="centered-container-text30">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container-text33">{props.text5}</span>
          <div className="centered-container-bullet-points1">
            <div className="centered-container-point06">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon12"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text34">
                <span>No. of Social Accounts- Unlimited</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point07">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon14"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text37">
                <span>No. of Brand Accounts- 2</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point08">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon16"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text40">
                <span>No. of Workspace Users- 5</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point09">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon18"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text43">
                <span>No. of AI Credits- 40</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point10">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon20"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text46">
                <span>Workspace Store- 2 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point11">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon22"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text49">
                <span>No. of Scheduled  Posts- 30</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container-card2">
          <span className="centered-container-text52">{props.text19}</span>
          {pricingSwitch === 1 && (
            <span className="centered-container-text53">{props.text11}</span>
          )}
          {pricingSwitch === 2 && (
            <span className="centered-container-text54">{props.text12}</span>
          )}
          <a
            href={props.linkGetStarted2}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container-link2"
          >
            <div className="centered-container-get-started2 template-button">
              <span className="centered-container-text55">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container-text58">{props.text13}</span>
          <div className="centered-container-bullet-points2">
            <div className="centered-container-point12"></div>
            <div className="centered-container-point13">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon24"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text59">
                <span className="centered-container-text60">
                  No. of Social Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point14">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon26"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text62">
                <span className="centered-container-text63">
                  No. of Brand Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point15">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon28"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text65">{props.text15}</span>
            </div>
            <div className="centered-container-point16">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon30"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text66">
                <span className="centered-container-text67">
                  No. of AI Credits- 200
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point17">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon32"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text69">
                <span>Workspace Store- 5 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container-point18">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container-icon34"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container-text72">
                <span className="centered-container-text73">
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

CenteredContainer.defaultProps = {
  text3: '$25/mo($299/yr)',
  linkGetStarted1: 'https://app.connectaily.com/connectaily/register',
  text16: 'Monthly',
  text11: 'Upgrade to our Pro Plan for $55 per month  ',
  text14: 'Start for free',
  text12: 'Upgrade to our Pro Plan for $65 per month  ',
  text4: '$32/mo',
  linkGetStarted: 'https://app.connectaily.com/connectaily/register',
  text: 'Pricing for all kind of businesses',
  text17: 'Yearly',
  text1:
    'Create next-generation solutions for small business customers with pricing options that accommodate everyone.',
  text8: 'Get exclusive access with $35 per month',
  text7: '$38/mo($450/yr)',
  text15: 'No. of Workspace Users- Unlimited',
  text13: "What's included",
  text18: 'Essential',
  text2: 'Basic',
  text19: 'Pro',
  text5: "What's included",
  linkGetStarted2: 'https://app.connectaily.com/connectaily/register',
}

CenteredContainer.propTypes = {
  text3: PropTypes.string,
  linkGetStarted1: PropTypes.string,
  text16: PropTypes.string,
  text11: PropTypes.string,
  text14: PropTypes.string,
  text12: PropTypes.string,
  text4: PropTypes.string,
  linkGetStarted: PropTypes.string,
  text: PropTypes.string,
  text17: PropTypes.string,
  text1: PropTypes.string,
  text8: PropTypes.string,
  text7: PropTypes.string,
  text15: PropTypes.string,
  text13: PropTypes.string,
  text18: PropTypes.string,
  text2: PropTypes.string,
  text19: PropTypes.string,
  text5: PropTypes.string,
  linkGetStarted2: PropTypes.string,
}

export default CenteredContainer
