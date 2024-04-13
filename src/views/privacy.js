import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './privacy.css'

const Privacy = (props) => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy- Connectaily</title>
        <meta
          name="description"
          content='"we", or "our"). This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your personal information when you use our software.'
        />
        <meta property="og:title" content="Privacy- Connectaily" />
        <meta
          property="og:description"
          content='"we", or "our"). This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your personal information when you use our software.'
        />
      </Helmet>
      <section className="privacy-hero">
        <div className="privacy-menu">
          <div id="mobile-menu" className="privacy-mobile-navigation">
            <img
              alt="pastedImage"
              src="/connectaily%20(26)-1500h.png"
              className="privacy-logo"
            />
            <div className="privacy-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="privacy-close-mobile-menu">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="privacy-icon"
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="privacy-desktop-navigation">
            <nav className="privacy-centered">
              <div className="privacy-left">
                <a href="https://connectaily.com" className="privacy-link">
                  <img
                    alt="pastedImage"
                    src="/connectaily%20(26)-1500h.png"
                    className="privacy-logo1"
                  />
                </a>
                <div className="privacy-links1">
                  <Link to="/" className="privacy-navlink Link">
                    Solutions
                  </Link>
                  <Link to="/" className="privacy-navlink1 Link">
                    How it works
                  </Link>
                  <Link to="/" className="privacy-navlink2 Link">
                    Prices
                  </Link>
                </div>
              </div>
              <div className="privacy-right">
                <a
                  href="https://app.connectaily.com/connectaily/login"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privacy-sign-in Link"
                >
                  Sign in
                </a>
                <a
                  href="https://app.connectaily.com/connectaily/register"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privacy-link1"
                >
                  <div className="privacy-get-started">
                    <span className="privacy-text003">Get started</span>
                  </div>
                </a>
                <div id="open-mobile-menu" className="privacy-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="privacy-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="privacy-container2">
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
      </section>
      <header className="privacy-header">
        <p className="privacy-text004">
          <span>Privacy Policy</span>
          <br></br>
          <br></br>
          <span>
            Thank you for choosing connectaily (&quot;us&quot;, &quot;we&quot;,
            or &quot;our&quot;) developed by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://itwhistle.com"
            target="_blank"
            rel="noreferrer noopener"
            className="privacy-link2"
          >
            IT WHISTLE CORPORATION
          </a>
          <span>
            . This Privacy Policy (&quot;Policy&quot;) explains how we collect,
            use, disclose, and safeguard your personal information when you use
            our software and related services (collectively, the
            &quot;Service&quot;). By accessing or using the Service, you agree
            to the practices described in this Policy. If you do not agree with
            this Policy, please refrain from using the Service.
          </span>
          <br></br>
          <br></br>
          <span>1. Information We Collect</span>
          <br></br>
          <br></br>
          <span>
            1.1. Personal Information: When you register an account or use
            certain features of the Service, we may collect personal
            information, such as your name, email address, and other contact
            details.
          </span>
          <br></br>
          <br></br>
          <span>
            1.2. Usage Data: We may automatically collect information about your
            interactions with the Service, such as your IP address, browser
            type, device information, pages visited, and the time and date of
            your visits.
          </span>
          <br></br>
          <br></br>
          <span>
            1.3. Cookies and Similar Technologies: We may use cookies, beacons,
            and other tracking technologies to collect information about your
            preferences and usage patterns. You can control the use of cookies
            through your browser settings.
          </span>
          <br></br>
          <br></br>
          <span>
            1.4. If you register through social logins: you can register using
            your account on the social network whose social login is active in
            connectaily for this purpose. In that case, the corresponding social
            network will provide us with your email, your profile picture, and
            your name with a Unique Identifier associated with your
            Administrator profile in connectaily.
          </span>
          <br></br>
          <br></br>
          <span>
            You must log into that social network and accept the permissions
            that you grant connectaily through it.
          </span>
          <br></br>
          <br></br>
          <span>
            connectaily therefore requests permission to access the APIs
            provided by social networks and other information providers such as
            YouTube API Services, Facebook API, Pinterest API, TikTok API and
            more. You can check here Google Privacy Policy. connectaily will
            access the information required by the user through the authorized
            APIs. This information will be processed solely for the benefit of
            the administrator and will not be shared with third parties. The
            administrator will be able to revoke the permissions without
            accessing your connectaily account directly from the social network
            or from the data provider. YouTube and other Google services can be
            revoked from the Google security service.
          </span>
          <br></br>
          <br></br>
          <span>2. How We Use Your Information</span>
          <br></br>
          <br></br>
          <span>
            2.1. Provide and Improve the Service: We use your information to
            deliver, maintain, and enhance the Service, as well as to develop
            new features and functionalities.
          </span>
          <br></br>
          <br></br>
          <span>
            2.2. Personalization: We may use your information to personalize
            your experience with the Service and to provide you with relevant
            content and recommendations.
          </span>
          <br></br>
          <br></br>
          <span>
            2.3. Communication: We may use your contact information to send you
            updates, newsletters, and other promotional materials related to the
            Service. You can opt out of receiving such communications at any
            time.
          </span>
          <br></br>
          <br></br>
          <span>
            2.4. Analytics: We use analytics tools to analyze user behavior and
            improve the Service&apos;s performance and user experience.
          </span>
          <br></br>
          <br></br>
          <span>
            2.5. Legal Compliance: We may use your information to comply with
            legal obligations and respond to requests from law enforcement
            authorities or government agencies.
          </span>
          <br></br>
          <br></br>
          <span>
            2.6. If you register through social logins: With the permissions
            that you grant connectaily through social networks (YouTube,
            Facebook, TikTok...etc.), will allow the connectaily application to
            access different features depending on the social network in
            question for the purpose. To provide the hired service to manage
            your accounts on social networks you carry out.
          </span>
          <br></br>
          <br></br>
          <span>
            Examples of such permissions are: managing your account, accessing
            your profile and the publications you make, managing comments,
            accessing statistics, creating and managing content.
          </span>
          <br></br>
          <br></br>
          <span>
            Permissions may vary depending on the social network with which you
            register through the corresponding social login.
          </span>
          <br></br>
          <br></br>
          <span>3. How We Share Your Information</span>
          <br></br>
          <br></br>
          <span>
            3.1. Service Providers: We may share your information with
            third-party service providers that help us operate the Service and
            perform related functions. Information required by the user through
            the authorized APIs (YouTube, Facebook, TikTok, Pinterest...etc.)
            will be processed solely for the benefit of the user and will not be
            shared with third parties.
          </span>
          <br></br>
          <br></br>
          <span>
            3.2. Affiliates: We may share your information with our affiliates
            for purposes consistent with this Policy.
          </span>
          <br></br>
          <br></br>
          <span>
            3.3. Business Transfers: If connectaily is involved in a merger,
            acquisition, or sale of assets, your information may be transferred
            as part of that transaction.
          </span>
          <br></br>
          <br></br>
          <span>
            3.4. Legal Requirements: We may disclose your information if
            required by law or in response to a valid legal request.
          </span>
          <br></br>
          <br></br>
          <span>4. Data Security</span>
          <br></br>
          <br></br>
          <span>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no method of transmission over the Internet or electronic
            storage is entirely secure, and we cannot guarantee absolute
            security.
          </span>
          <br></br>
          <br></br>
          <span>5. Third-Party Links and Services</span>
          <br></br>
          <br></br>
          <span>
            The Service may contain links to third-party websites and services
            that are not operated or controlled by connectaily. This Policy does
            not apply to such third-party websites and services. We recommend
            reviewing the privacy policies of those third parties before
            providing any personal information.
          </span>
          <br></br>
          <br></br>
          <span>6. Your Rights</span>
          <br></br>
          <br></br>
          <span>
            You have the right to access, correct, update, and delete your
            personal information. If you wish to exercise any of these rights or
            have questions about your information, please contact us using the
            contact information provided below.
          </span>
          <br></br>
          <br></br>
          <span>7. Changes to this Privacy Policy</span>
          <br></br>
          <br></br>
          <span>
            connectaily may update this Policy from time to time. We will notify
            you of any material changes by posting the updated Policy on our
            website or through other communication channels. Your continued use
            of the Service after the changes become effective constitutes your
            acceptance of the revised Policy.
          </span>
          <br></br>
          <br></br>
          <span>8. Contact Us</span>
          <br></br>
          <br></br>
          <span>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the Service, please contact us at
            admin@connectialy.com
          </span>
          <br></br>
          <br></br>
          <span>
            By using the Service, you acknowledge that you have read,
            understood, and agreed to this Privacy Policy.
          </span>
          <br></br>
          <br></br>
          <span>
            Thank you for trusting connectaily with your personal information.
          </span>
        </p>
      </header>
      <section className="privacy-banners"></section>
      <footer className="privacy-footer">
        <div className="privacy-top">
          <div className="privacy-left1">
            <span className="privacy-text109">Subscribe to our newsletter</span>
            <div className="privacy-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="privacy-textinput input"
              />
              <div className="privacy-subscribe">
                <span className="privacy-text110">Subscribe</span>
              </div>
            </div>
            <span className="privacy-text111">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="privacy-contact">
              <span className="privacy-text112">Contact</span>
              <a
                href="mailto:admin@connectaily.com?subject=Support"
                className="privacy-link3"
              >
                admin@connectaily.com
              </a>
            </div>
          </div>
        </div>
        <div className="privacy-bottom">
          <div className="privacy-container3">
            <div className="privacy-container4">
              <div className="privacy-container5">
                <div className="privacy-container6">
                  <span className="privacy-text113">
                    <br></br>
                    <br></br>
                    <span>©</span>
                    <span>2024 Connectaily • Crafted by  </span>
                  </span>
                </div>
              </div>
            </div>
            <a
              href="https://itwhistle.com"
              target="_blank"
              rel="noreferrer noopener"
              className="privacy-link4"
            >
              <img
                alt="image"
                src="/logo_white_background-200h.jpg"
                className="privacy-image"
              />
            </a>
            <span className="privacy-text118">
              <br></br>
              <br></br>
              <span>
                                                                               
                 
              </span>
              <a
                href="https://connectaily.com/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="privacy-link5"
              >
                Privac
              </a>
              <span className="privacy-text122">y</span>
              <span>
                 
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
                className="privacy-link6"
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
              <a
                href="mailto:admin@connectaily.com?subject=Support"
                className="privacy-link7"
              >
                Email us
              </a>
              <span> </span>
              <span> </span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Privacy
