import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
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
                <img
                  alt="pastedImage"
                  src="/connectaily%20(26)-1500h.png"
                  className="home-logo1"
                />
                <div className="home-links1">
                  <span className="Link">Solutions</span>
                  <span className="Link">How it works</span>
                  <span className="Link">Prices</span>
                </div>
              </div>
              <div className="home-right">
                <span className="home-sign-in Link">Sign in</span>
                <div className="home-get-started">
                  <span className="home-text006">Get started</span>
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
          <h1 className="home-text007">
            <span>
              Boost Your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text009">Social Media</span>
            <span> Presence with Connectaily</span>
          </h1>
          <p className="home-text011">
            Automate your social media marketing with cutting-edge AI technology
          </p>
          <div className="home-get-started1">
            <a
              href="https://app.connectaily.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
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
          <span className="home-text012">
            <span>
              Let&apos;s grow your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text014">social media</span>
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
          <span className="home-text018">
            Hassle free automated social media marketing with AI
          </span>
        </div>
        <div className="home-cards">
          <div className="home-container03">
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon02"
              />
              <span className="home-text019">Schedule</span>
              <span className="home-text020">
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
              <span className="home-text021">Publish</span>
              <span className="home-text022">
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
              <span className="home-text023">Analyze</span>
              <span className="home-text024">
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
              <span className="home-text025">Get leads</span>
              <span className="home-text026">
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
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-avatar"
            />
            <span className="home-quote1">
              <span className="home-text027">—  Ramesh</span>
              <span>, Founder and CEO, Siri Tech</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container05">
            <div className="home-left1">
              <span className="home-text029 sub-title">Content Management</span>
              <span className="home-text030 title">
                Manage all your platforms in just one place.
              </span>
              <span className="home-text031">
                Your all-in-one solution for social media marketing! With our
                advanced AI technology we make managing your social media
                accounts hassle-free. Let us help you grow your online presence
                and generate more leads for your business.
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text032">Get started</span>
              </div>
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
              <span className="home-text033 sub-title">
                Reporting Metrics
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2 className="home-text034 title">
                Advanced analytics, easy to understand.
              </h2>
              <div className="home-category">
                <span className="home-text035">Power reports</span>
                <span className="home-text036">
                  {' '}
                  With our cutting-edge AI technology and powerful analytics
                  tools, we make it easy for businesses to boost their online
                  presence. Our seamless integration with other platforms and
                  customizable pricing options ensure that managing your social
                  media has never been easier. Join us today and watch your
                  business thrive!
                </span>
                <a
                  href="https://app.connectaily.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container06">
            <div className="home-left2">
              <span className="home-text037">Improve Scheduling</span>
              <h2 className="home-text038 title">
                Powerful scheduler that saves you time
              </h2>
              <span className="home-text039">
                With our advanced scheduling feature, powered by AI technology,
                we make it effortless for businesses to plan and automate posts.
                Analyze performance, generate leads, and enjoy seamless
                integration with other tools. Choose from flexible pricing
                options to suit your needs and let Connectaily simplify your
                social media management to help your business thrive online.
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text040">Get started</span>
              </div>
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
            <span className="home-text041 sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text043">
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
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text044">How it works</span>
            <span className="home-text045 title">
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className="home-category1">
            <div className="home-headng">
              <span className="home-text046">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text047">
                Enroll with Connectaily to access AI-generated social media
                marketing, designed to efficiently expand your business
                outreach.
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text048">Get started</span>
              </div>
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
                <span className="home-text049">2 — Act</span>
                <span className="home-text050">
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
                <span className="home-text051">3 — Act</span>
                <span className="home-text052">
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
        <div className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text053 title">
              Pricing for all kind of businesses
            </span>
            <span className="home-text054">
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className="home-selection">
              <span className="home-text055">Monthly</span>
              <span className="home-text056">Yearly</span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text057">Free</span>
              <span className="home-text058">
                test lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed doliqua.
              </span>
              <div className="home-get-started5 template-button">
                <span className="home-text059">Start for free</span>
              </div>
              <span className="home-text060">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text061">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text062">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text063">Pay as you go</span>
              <span className="home-text064">
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div className="home-get-started6 template-button">
                <span className="home-text068">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text071">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text072">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text073">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text074">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text075">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text076">Enterprise</span>
              <span className="home-text077">
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div className="home-get-started7 template-button">
                <span className="home-text080">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text083">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text084">
                    Sed ut pespiciatis unde omnis
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
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text086">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text087">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left3">
          <span className="home-text088">Testimonals</span>
          <span className="home-text089 title">
            What people say about Connectaily
          </span>
        </div>
        <div className="home-right2">
          <div className="home-column">
            <Testimonal
              quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
              avatarSrc="/image552912-e3yq-200h.png"
            ></Testimonal>
            <Testimonal
              from="Social Club"
              name="Jessica Smith"
              quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
              avatarSrc="/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              from="BeMe"
              name="Logan Boy"
              quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              avatarSrc="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              from="Hello W."
              name="Laraine Summers"
              quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              avatarSrc="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              from="Handsly"
              name="William McPau"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              avatarSrc="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              from="Share"
              name="Mariah Mae"
              quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              avatarSrc="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              from="Gather"
              name="John Finati"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              avatarSrc="/image102913-x4z8-200h.png"
            ></Testimonal>
            <Testimonal
              from="Zigo"
              name="Mary Pau"
              quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              avatarSrc="/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text090">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading3">
            <span className="home-text093 title">
              <span>Get leads now </span>
              <br></br>
              <span>with Connectaily!</span>
            </span>
            <span className="home-text097">
              Discover the ultimate solution for lead generation with
              Connectaily. Our innovative AI-driven platform empowers you to not
              only enhance your social media presence but also strategically
              convert followers into valuable leads. With Connectaily, seize the
              opportunity to optimize your marketing efforts and drive
              meaningful business growth through targeted engagement and
              conversion-focused strategies.
            </span>
            <div className="home-get-started8 template-button">
              <span className="home-text098">
                <span>Start free</span>
                <br></br>
              </span>
            </div>
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
          <div className="home-left4">
            <span className="home-text101">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text102">Subscribe</span>
              </div>
            </div>
            <span className="home-text103">
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
                className="home-link2"
              >
                Terms and Conditions
              </a>
              <span>.</span>
            </span>
            <div className="home-contact">
              <span className="home-text106">Contact</span>
              <a
                href="mailto:admin@connectaily.com?subject=Support"
                className="home-link3"
              >
                admin@connectaily.com
              </a>
            </div>
          </div>
        </div>
        <div className="home-bottom"></div>
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <div className="home-container13">
                <div className="home-container14">
                  <span className="home-text107">
                    <br></br>
                    <span>©</span>
                    <span>2024 Connectaily • Crafted by</span>
                    <br></br>
                    <a
                      href="mailto:admin@connectaily.com?subject=Support"
                      className="home-link4"
                    >
                      Email us
                    </a>
                    <span>   </span>
                    <a
                      href="https://connectaily.com/privacy"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link5"
                    >
                      Privacy
                    </a>
                    <span>  </span>
                    <a
                      href="https://connectaily.com/terms"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link6"
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
            className="home-link7"
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
