import React from 'react'

import PropTypes from 'prop-types'

import './centered-container2.css'

const CenteredContainer2 = (props) => {
  return (
    <div id="price" className="centered-container2-centered-container">
      <div className="centered-container2-heading">
        <span className="centered-container2-text title">{props.text}</span>
        <span className="centered-container2-text01">{props.text1}</span>
        <div className="centered-container2-selection">
          <span className="centered-container2-text02 accordionContainer">
            {props.text2}
          </span>
          <span className="centered-container2-text03 accordionContainer button">
            {props.text3}
          </span>
        </div>
      </div>
      <div className="centered-container2-cards">
        <div className="centered-container2-card">
          <span className="centered-container2-text04">{props.text4}</span>
          <span className="centered-container2-text05">
            <span className="centered-container2-text06">
              $25/mo(25% Discount!)
            </span>
            <br className="centered-container2-text07"></br>
            <span className="centered-container2-text08">$384</span>
            <span className="centered-container2-text09"> $299/yr</span>
            <br></br>
            <br></br>
          </span>
          <span className="centered-container2-text12">{props.text5}</span>
          <a
            href={props.linkGetStarted}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container2-link"
          >
            <div className="centered-container2-get-started template-button">
              <span className="centered-container2-text13">{props.text13}</span>
            </div>
          </a>
          <span className="centered-container2-text14">{props.text6}</span>
          <div className="centered-container2-bullet-points">
            <div className="centered-container2-point">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text15">
                <span>No. of Social Accounts- 10</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point01">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon02"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text18">
                <span>No. of Brand Accounts- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point02">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon04"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text21">
                <span>No. of Workspace Users- 1</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point03">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon06"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text24">
                <span>No. of AI Credits- 40</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point04">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon08"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text27">
                <span>Workspace Store- 2 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point05">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon10"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text30">
                <span>No. of Scheduled  Posts- 40</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container2-card1">
          <span className="centered-container2-text33">{props.text7}</span>
          <span className="centered-container2-text34">
            <span>$38/mo(25% Discount!)</span>
            <br></br>
            <span>$</span>
            <span className="centered-container2-text38">588</span>
            <span> $450/yr)</span>
            <br></br>
            <br></br>
          </span>
          <span className="centered-container2-text42">{props.text8}</span>
          <a
            href={props.linkGetStarted1}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container2-link1"
          >
            <div className="centered-container2-get-started1 template-button">
              <span className="centered-container2-text43">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container2-text46">{props.text9}</span>
          <div className="centered-container2-bullet-points1">
            <div className="centered-container2-point06">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon12"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text47">
                <span>No. of Social Accounts- Unlimited</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point07">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon14"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text50">
                <span>No. of Brand Accounts- 2</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point08">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon16"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text53">
                <span>No. of Workspace Users- 5</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point09">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon18"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text56">
                <span>No. of AI Credits- 200</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point10">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon20"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text59">
                <span>Workspace Store- 5 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point11">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon22"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text62">
                <span>No. of Scheduled  Posts- 200</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="centered-container2-card2">
          <span className="centered-container2-text65">{props.text10}</span>
          <span className="centered-container2-text66">
            <span>$86/mo(25% Discount!)</span>
            <br className="centered-container2-text68"></br>
            <span className="centered-container2-text69">$1380</span>
            <span> $999/yr</span>
            <br></br>
            <br></br>
          </span>
          <span className="centered-container2-text73">{props.text11}</span>
          <a
            href={props.linkGetStarted2}
            target="_blank"
            rel="noreferrer noopener"
            className="centered-container2-link2"
          >
            <div className="centered-container2-get-started2 template-button">
              <span className="centered-container2-text74">
                <span>Buy Now</span>
                <br></br>
              </span>
            </div>
          </a>
          <span className="centered-container2-text77">{props.text12}</span>
          <div className="centered-container2-bullet-points2">
            <div className="centered-container2-point12"></div>
            <div className="centered-container2-point13">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon24"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text78">
                <span className="centered-container2-text79">
                  No. of Social Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point14">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon26"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text81">
                <span className="centered-container2-text82">
                  No. of Brand Accounts- Unlimited
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point15">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon28"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text84">{props.text14}</span>
            </div>
            <div className="centered-container2-point16">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon30"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text85">
                <span className="centered-container2-text86">
                  No. of AI Credits- 1000
                </span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point17">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon32"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text88">
                <span>Workspace Store- 10 GB</span>
                <br></br>
              </span>
            </div>
            <div className="centered-container2-point18">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="centered-container2-icon34"
              >
                <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="centered-container2-text91">
                <span className="centered-container2-text92">
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

CenteredContainer2.defaultProps = {
  text: 'Pricing for all kind of businesses',
  text6: "What's included",
  text11: '$115/mo',
  text12: "What's included",
  linkGetStarted2: 'https://app.connectaily.com/connectaily/register',
  text5: '$32/mo',
  text1:
    'Create next-generation solutions for small business customers with pricing options that accommodate everyone.',
  text2: 'Monthly',
  linkGetStarted1: 'https://app.connectaily.com/connectaily/register',
  text14: 'No. of Workspace Users- Unlimited',
  text9: "What's included",
  text7: 'Essential',
  text4: 'Basic',
  text10: 'Pro',
  text13: 'Start for free',
  linkGetStarted: 'https://app.connectaily.com/connectaily/register',
  text8: '$49/mo',
  text3: 'Yearly',
}

CenteredContainer2.propTypes = {
  text: PropTypes.string,
  text6: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  linkGetStarted2: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  linkGetStarted1: PropTypes.string,
  text14: PropTypes.string,
  text9: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text10: PropTypes.string,
  text13: PropTypes.string,
  linkGetStarted: PropTypes.string,
  text8: PropTypes.string,
  text3: PropTypes.string,
}

export default CenteredContainer2
