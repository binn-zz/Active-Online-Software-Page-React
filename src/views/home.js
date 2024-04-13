import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import YouTube from '../components/you-tube'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/connectaily%20(26)-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <a
                  href="https://connectaily.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <img
                    alt="pastedImage"
                    src="/connectaily%20(26)-1500h.png"
                    className="home-logo1"
                  />
                </a>
                <div className="home-links1">
                  <a href="#solution" className="home-link01 Link">
                    Solutions
                  </a>
                  <a href="#works" className="home-link02 Link">
                    How it works
                  </a>
                  <a href="#price" className="home-link03 Link">
                    Prices
                  </a>
                </div>
              </div>
              <div className="home-right">
                <a
                  href="https://app.connectaily.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-sign-in Link"
                >
                  Sign in
                </a>
                <div className="home-get-started">
                  <a
                    href="https://app.connectaily.com/connectaily/register"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link04"
                  >
                    Get started
                  </a>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container02">
              <Script
                html={`<script defer>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text003">
            <span>
              Boosst Your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text005">Social Media</span>
            <span> Presence with Connectaily</span>
          </h1>
          <p className="home-text007">
            Automate your social media marketing with cutting-edge AI technology
          </p>
          <div className="home-get-started01">
            <a
              href="https://app.connectaily.com/connectaily/register"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              Get started
            </a>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/pastedimage-cdo-1000h.png"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text008">
            <span>
              Let&apos;s grow your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text010">social media</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>presence</span>
          </span>
          <span className="home-text014">
            Hassle free automated social media marketing with AI
          </span>
        </div>
        <div className="home-cards">
          <div id="solution" className="home-container03">
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon02"
              />
              <span className="home-text015">Schedule</span>
              <span className="home-text016">
                Effortlessly schedule your social media posts, manage content,
                and track analytics with our AI-powered platform. Grow your
                audience, generate leads, and seamlessly integrate with other
                tools. Choose from flexible pricing options to suit businesses
                of all sizes.
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className="home-icon03"
              />
              <span className="home-text017">Publish</span>
              <span className="home-text018">
                Elevate your social media presence with Connectaily&apos;s
                advanced AI-powered scheduling. Drive business growth, lead
                generation, and seamless tool integration.All in one tool!
              </span>
            </div>
          </div>
          <div className="home-container04">
            <div className="card home-analyze">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon04"
              />
              <span className="home-text019">Analyze</span>
              <span className="home-text020">
                Stay ahead of the competition with our advanced social media
                analytics tools. Track engagement, monitor trends, and optimize
                your strategy for maximum results.
              </span>
            </div>
            <div className="card home-analyze1">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon05"
              />
              <span className="home-text021">Get leads</span>
              <span className="home-text022">
                Stay ahead of the competition with our advanced social media
                analytics tools. Track engagement, monitor trends, and optimize
                your strategy for maximum results.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            “Connectaily scaled our content, grew daily with auto schedule
            option.”
          </span>
          <div className="home-author">
            <img alt="image" src="/srini-200w.png" className="home-avatar" />
            <span className="home-quote1">
              <span className="home-text023">—  Srini</span>
              <span>, Founder and CEO, Mazelon</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container05">
            <div className="home-left1">
              <span className="home-text025 sub-title">Content Management</span>
              <span className="home-text026 title">
                Manage all your platforms in just one place.
              </span>
              <span className="home-text027">
                Your all-in-one solution for social media marketing! With our
                advanced AI technology we make managing your social media
                accounts hassle-free. Let us help you grow your online presence
                and generate more leads for your business.
              </span>
              <a
                href="https://app.connectaily.com/connectaily/register"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <div className="home-get-started02 template-button">
                  <span className="home-text028">Start Free</span>
                </div>
              </a>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <span className="home-text029 sub-title">
                Reporting Metrics
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2 className="home-text030 title">
                Advanced analytics, easy to understand.
              </h2>
              <div className="home-category">
                <span className="home-text031">Power reports</span>
                <span className="home-text032">
                  {' '}
                  With our cutting-edge AI technology and powerful analytics
                  tools, we make it easy for businesses to boost their online
                  presence. Our seamless integration with other platforms and
                  customizable pricing options ensure that managing your social
                  media has never been easier. Join us today and watch your
                  business thrive!
                </span>
                <a
                  href="https://app.connectaily.com/connectaily/register"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link07"
                >
                  <div className="home-get-started03 template-button">
                    <span className="home-text033">Get started</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container06">
            <div className="home-left2">
              <span className="home-text034">Improve Scheduling</span>
              <h2 className="home-text035 title">
                Powerful scheduler that saves you time
              </h2>
              <span className="home-text036">
                With our advanced scheduling feature, powered by AI technology,
                we make it effortless for businesses to plan and automate posts.
                Analyze performance, generate leads, and enjoy seamless
                integration with other tools. Choose from flexible pricing
                options to suit your needs and let Connectaily simplify your
                social media management to help your business thrive online.
              </span>
              <a
                href="https://app.connectaily.com/connectaily/register"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <div className="home-get-started04 template-button">
                  <span className="home-text037">Get started</span>
                </div>
              </a>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="home-text038 sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text040">
              Your ultimate social media marketing partner! Utilizing
              state-of-the-art AI technology, automated scheduling, and robust
              analytics tools, we empower businesses to boost their online
              presence effortlessly. Explore our seamless integration and
              customizable pricing plans to revolutionize your social media
              strategy now.
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container07">
                <YouTube></YouTube>
                <YouTube pastedImageSrc="/logos/group%201012-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group-200h.png"></YouTube>
              </div>
              <div className="home-container08">
                <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201014-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div id="works" className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text041">How it works</span>
            <span className="home-text042 title">
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className="home-category1">
            <div className="home-headng">
              <span className="home-text043">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text044">
                Enroll with Connectaily to access AI-generated social media
                marketing, designed to efficiently expand your business
                outreach.
              </span>
              <a
                href="https://app.connectaily.com/connectaily/register"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <div className="home-get-started05 template-button">
                  <span className="home-text045">Get started</span>
                </div>
              </a>
            </div>
            <div className="home-container09">
              <img
                alt="pastedImage"
                src="/pastedimage-k5xi%201-1200w.png"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category2">
              <div className="home-headng1">
                <span className="home-text046">2 — Act</span>
                <span className="home-text047">
                  Integrate all your social media platforms seamlessly and
                  commence scheduling and posting content through
                  Connectaily&apos;s AI-driven capabilities.
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-ibg-1200w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category3">
              <div className="home-headng2">
                <span className="home-text048">3 — Scale</span>
                <span className="home-text049">
                  Utilize Connectaily to analyze daily statistics, thereby
                  validating and enhancing your social media presence to
                  effectively generate more leads.
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-3c4o-1200w.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div id="price" className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text050 title">
              Pricing for all kind of businesses
            </span>
            <span className="home-text051">
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className="home-selection">
              <span className="home-text052">Monthly</span>
              <span className="home-text053">Yearly</span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text054">Free</span>
              <span className="home-text055">
                Register and try connectaily for free
              </span>
              <div className="home-get-started06 template-button">
                <span className="home-text056">Start for free</span>
              </div>
              <span className="home-text057">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text058">
                    <span>No. of Social Accounts- 5</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text061">
                    <span>No. of Brand Accounts- 1</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text064">
                    <span>No. of Workspace Users- 1</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text067">
                    <span>No. of AI Credits- 10</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text070">
                    <span>Workspace Store- 500 MB</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text073">
                    <span>No. of Scheduled  Posts- 10</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text076">Pay as you go</span>
              <span className="home-text077">
                Get exclusive access with $25 per month
              </span>
              <div className="home-get-started07 template-button">
                <span className="home-text078">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text081">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text082">
                    <span>No. of Social Accounts- Unlimited</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text085">
                    <span>No. of Brand Accounts- 2</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text088">
                    <span>No. of Workspace Users- 5</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text091">
                    <span>No. of AI Credits- 40</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point10">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon26"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text094">
                    <span>Workspace Store- 2 GB</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point11">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon28"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text097">
                    <span>No. of Scheduled  Posts- 30</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text100">Pro</span>
              <span className="home-text101">
                Upgrade to our Pro Plan for $55 per month unrivaled social media
                marketing capabilities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-get-started08 template-button">
                <span className="home-text102">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text105">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point12"></div>
                <div className="home-point13">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon30"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text106">
                    <span className="home-text107">
                      No. of Social Accounts- Unlimited
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point14">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon32"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text109">
                    <span className="home-text110">
                      No. of Brand Accounts- Unlimited
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point15">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon34"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text112">
                    No. of Workspace Users- Unlimited
                  </span>
                </div>
                <div className="home-point16">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon36"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text113">
                    <span className="home-text114">No. of AI Credits- 200</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point17">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon38"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text116">
                    <span>Workspace Store- 5 GB</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point18">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon40"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text119">
                    <span className="home-text120">
                      No. of Scheduled  Posts- Unlimited
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading3">
            <span className="home-text122 title">
              <span>Get leads now </span>
              <br></br>
              <span>with Connectaily!</span>
            </span>
            <span className="home-text126">
              Discover the ultimate solution for lead generation with
              Connectaily. Our innovative AI-driven platform empowers you to not
              only enhance your social media presence but also strategically
              convert followers into valuable leads. With Connectaily, seize the
              opportunity to optimize your marketing efforts and drive
              meaningful business growth through targeted engagement and
              conversion-focused strategies.
            </span>
            <a
              href="https://app.connectaily.com/connectaily/register"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <div className="home-get-started09 template-button">
                <span className="home-text127">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/e564eaa3c4fab71792794d666a281742-1200w.png"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left3">
            <span className="home-text130">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text131">Subscribe</span>
              </div>
            </div>
            <span className="home-text132">
              <span>
                By subscribing to our newsletter you agree with our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://connectaily.com/terms"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                Terms and Conditions
              </a>
              <span>.</span>
            </span>
            <div className="home-contact">
              <span className="home-text135">Contact</span>
              <a
                href="mailto:admin@connectaily.com?subject=Support"
                className="home-link12"
              >
                admin@connectaily.com
              </a>
            </div>
          </div>
        </div>
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <div className="home-container13">
                <div className="home-container14">
                  <span className="home-text136">
                    <br></br>
                    <span>©</span>
                    <span>2024 Connectaily • Crafted by</span>
                    <br></br>
                    <a
                      href="mailto:admin@connectaily.com?subject=Support"
                      className="home-link13"
                    >
                      Email us
                    </a>
                    <span>   </span>
                    <a
                      href="https://connectaily.com/privacy"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link14"
                    >
                      Privacy
                    </a>
                    <span>  </span>
                    <a
                      href="https://connectaily.com/terms"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link15"
                    >
                      Terms of use
                    </a>
                    <span>
                       
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://itwhistle.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link16"
          >
            <img
              alt="image"
              src="/logo_white_background-200h.jpg"
              className="home-image2"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
