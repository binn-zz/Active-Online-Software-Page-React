import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './centered-container3.css'

const CenteredContainer3 = (props) => {
  const [swicthPlan, setSwicthPlan] = useState(1)
  return (
    <div id="price" className="centered-container3-centered-container">
      <div className="centered-container3-heading">
        <span className="centered-container3-text title">{props.text}</span>
        <span className="centered-container3-text01">{props.text1}</span>
        <div className="centered-container3-selection">
          <span
            onClick={() => setSwicthPlan(2)}
            className="centered-container3-text02 accordionContainer"
          >
            {props.text2}
          </span>
          <span
            onClick={() => setSwicthPlan(1)}
            className="centered-container3-text03 accordionContainer button"
          >
            {props.text3}
          </span>
        </div>
      </div>
      <div className="centered-container3-cards">
        <div className="centered-container3-card">
          <span className="centered-container3-text04">{props.text4}</span>
          {swicthPlan === 1 && (
            <span className="centered-container3-text05">
              <span className="centered-container3-text06">
                $25/mo(25% Discount!)
              </span>
              <br className="centered-container3-text07"></br>
              <span className="centered-container3-text08">$384</span>
              <span className="centered-container3-text09"> $299/yr</span>
              <br></br>
            </span>
          )}
          {swicthPlan === 2 && (
            <span className="centered-container3-text11">
              <span className="centered-container3-text12">$32/mo</span>
              <br></br>
            </span>
          )}
          <a
            href="https://app.connectaily.com/connectaily/register"
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container3-link"
          >
            <div className="centered-container3-get-started template-button">
              <span className="centered-container3-text14">{props.text10}</span>
            </div>
          </a>
          <span className="centered-container3-text15">{props.text5}</span>
          <div className="centered-container3-bullet-points">
            <div className="centered-container3-point">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text16">
                <span>No. of Social Accounts- 10</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point01">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon02"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text19">
                <span>No. of Brand Accounts- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point02">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon04"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text22">
                <span>No. of Workspace Users- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point03">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon06"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text25">
                <span>No. of AI Credits- 40</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point04">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon08"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text28">
                <span>Workspace Store- 2 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point05">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon10"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text31">
                <span>No. of Scheduled  Posts- 40</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container3-card1">
          <span className="centered-container3-text34">
            <br></br>
            <span>Essential</span>
          </span>
          {swicthPlan === 1 && (
            <span className="centered-container3-text37">
              <span>$38/mo(25% Discount!)</span>
              <br></br>
              <span>$</span>
              <span className="centered-container3-text41">588</span>
              <span> $450/yr)</span>
              <br></br>
            </span>
          )}
          {swicthPlan === 2 && (
            <span className="centered-container3-text44">
              <span>$49/mo</span>
              <br></br>
              <br></br>
            </span>
          )}
          <a
            href="https://app.connectaily.com/connectaily/register"
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container3-link1"
          >
            <div className="centered-container3-get-started1 template-button">
              <span className="centered-container3-text48">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container3-text51">{props.text6}</span>
          <div className="centered-container3-bullet-points1">
            <div className="centered-container3-point06">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon12"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text52">
                <span>No. of Social Accounts- Unlimited</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point07">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon14"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text55">
                <span>No. of Brand Accounts- 2</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point08">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon16"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text58">
                <span>No. of Workspace Users- 5</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point09">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon18"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text61">
                <span>No. of AI Credits- 200</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point10">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon20"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text64">
                <span>Workspace Store- 5 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point11">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon22"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text67">
                <span>No. of Scheduled  Posts- 200</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container3-card2">
          <span className="centered-container3-text70">{props.text7}</span>
          {swicthPlan === 1 && (
            <span className="centered-container3-text71">
              <span>$86/mo(25% Discount!)</span>
              <br className="centered-container3-text73"></br>
              <span className="centered-container3-text74">$1380</span>
              <span> $999/yr</span>
              <br></br>
            </span>
          )}
          {swicthPlan === 2 && (
            <span className="centered-container3-text77">{props.text8}</span>
          )}
          <a
            href="https://app.connectaily.com/connectaily/register"
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container3-link2"
          >
            <div className="centered-container3-get-started2 template-button">
              <span className="centered-container3-text78">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container3-text81">{props.text9}</span>
          <div className="centered-container3-bullet-points2">
            <div className="centered-container3-point12">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon24"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text82">
                <span className="centered-container3-text83">
                  No. of Social Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point13">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon26"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text85">
                <span className="centered-container3-text86">
                  No. of Brand Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point14">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon28"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text88">{props.text11}</span>
            </div>
            <div className="centered-container3-point15">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon30"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text89">
                <span className="centered-container3-text90">
                  No. of AI Credits- 1000
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point16">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon32"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text92">
                <span>Workspace Store- 10 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container3-point17">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container3-icon34"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container3-text95">
                <span className="centered-container3-text96">
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

CenteredContainer3.defaultProps = {
  text7: 'Pro',
  linkGetStarted1: 'https://app.connectaily.com/connectaily/register',
  linkGetStarted2: 'https://app.connectaily.com/connectaily/register',
  text4: 'Basic',
  text9: "What's included",
  text11: 'No. of Workspace Users- Unlimited',
  text: 'Pricing for all kind of businesses',
  text10: 'Start for free',
  text1:
    'Create next-generation solutions for small business customers with pricing options that accommodate everyone.',
  text5: "What's included",
  text8: '$115/mo',
  linkGetStarted: 'https://app.connectaily.com/connectaily/register',
  text6: "What's included",
  text2: 'Monthly',
  text3: 'Yearly',
}

CenteredContainer3.propTypes = {
  text7: PropTypes.string,
  linkGetStarted1: PropTypes.string,
  linkGetStarted2: PropTypes.string,
  text4: PropTypes.string,
  text9: PropTypes.string,
  text11: PropTypes.string,
  text: PropTypes.string,
  text10: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
  linkGetStarted: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default CenteredContainer3
