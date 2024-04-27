import React from 'react'

import PropTypes from 'prop-types'

import './cards-m.css'

const CardsM = (props) => {
  return (
    <div className={`cards-m-cards-m ${props.rootClassName} `}>
      <div className="cards-m-card">
        <span className="cards-m-text">{props.text}</span>
        <span className="cards-m-text01">{props.text1}</span>
        <a
          href={props.linkGetStarted}
          target="_blank"
          rel="noreferrer noopener"
          className="cards-m-link"
        >
          <div className="cards-m-get-started template-button">
            <span className="cards-m-text02">{props.text9}</span>
          </div>
        </a>
        <span className="cards-m-text03">{props.text2}</span>
        <div className="cards-m-bullet-points">
          <div className="cards-m-point">
            <svg viewBox="0 0 877.7142857142857 1024" className="cards-m-icon">
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text04">
              <span>No. of Social Accounts- 5</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point01">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon02"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text07">
              <span>No. of Brand Accounts- 1</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point02">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon04"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text10">
              <span>No. of Workspace Users- 1</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point03">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon06"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text13">
              <span>No. of AI Credits- 10</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point04">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon08"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text16">
              <span>Workspace Store- 500 MB</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point05">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon10"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text19">
              <span>No. of Scheduled  Posts- 10</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="cards-m-card1">
        <span className="cards-m-text22">{props.text3}</span>
        <span className="cards-m-text23">{props.text4}</span>
        <a
          href={props.linkGetStarted1}
          target="_blank"
          rel="noreferrer noopener"
          className="cards-m-link1"
        >
          <div className="cards-m-get-started1 template-button">
            <span className="cards-m-text24">
              <span>Buy Now</span>
              <br></br>
            </span>
          </div>
        </a>
        <span className="cards-m-text27">{props.text5}</span>
        <div className="cards-m-bullet-points1">
          <div className="cards-m-point06">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon12"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text28">
              <span>No. of Social Accounts- Unlimited</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point07">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon14"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text31">
              <span>No. of Brand Accounts- 2</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point08">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon16"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text34">
              <span>No. of Workspace Users- 5</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point09">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon18"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text37">
              <span>No. of AI Credits- 40</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point10">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon20"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text40">
              <span>Workspace Store- 2 GB</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point11">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon22"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text43">
              <span>No. of Scheduled  Posts- 30</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="cards-m-card2">
        <span className="cards-m-text46">{props.text6}</span>
        <span className="cards-m-text47">{props.text7}</span>
        <a
          href={props.linkGetStarted2}
          target="_blank"
          rel="noreferrer noopener"
          className="cards-m-link2"
        >
          <div className="cards-m-get-started2 template-button">
            <span className="cards-m-text48">
              <span>Buy Now</span>
              <br></br>
            </span>
          </div>
        </a>
        <span className="cards-m-text51">{props.text8}</span>
        <div className="cards-m-bullet-points2">
          <div className="cards-m-point12"></div>
          <div className="cards-m-point13">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon24"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text52">
              <span className="cards-m-text53">
                No. of Social Accounts- Unlimited
              </span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point14">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon26"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text55">
              <span className="cards-m-text56">
                No. of Brand Accounts- Unlimited
              </span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point15">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon28"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text58">{props.text10}</span>
          </div>
          <div className="cards-m-point16">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon30"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text59">
              <span className="cards-m-text60">No. of AI Credits- 200</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point17">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon32"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text62">
              <span>Workspace Store- 5 GB</span>
              <br></br>
            </span>
          </div>
          <div className="cards-m-point18">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cards-m-icon34"
            >
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="cards-m-text65">
              <span className="cards-m-text66">
                No. of Scheduled  Posts- Unlimited
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

CardsM.defaultProps = {
  text3: 'Basic',
  text5: "What's included",
  text6: 'Pro',
  linkGetStarted: 'https://app.connectaily.com/connectaily/register',
  text: 'Free',
  linkGetStarted1: 'https://app.connectaily.com/connectaily/register',
  text10: 'No. of Workspace Users- Unlimited',
  text8: "What's included",
  text7:
    'Upgrade to our Pro Plan for $55 per month unrivaled social media marketing capabilities. ',
  rootClassName: '',
  linkGetStarted2: 'https://app.connectaily.com/connectaily/register',
  text2: "What's included",
  text9: 'Start for free',
  text1: 'Register and try connectaily for free',
  text4: 'Get exclusive access with $25 per month',
}

CardsM.propTypes = {
  text3: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  linkGetStarted: PropTypes.string,
  text: PropTypes.string,
  linkGetStarted1: PropTypes.string,
  text10: PropTypes.string,
  text8: PropTypes.string,
  text7: PropTypes.string,
  rootClassName: PropTypes.string,
  linkGetStarted2: PropTypes.string,
  text2: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default CardsM
