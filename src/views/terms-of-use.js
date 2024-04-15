import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './terms-of-use.css'

const TermsOfUse = (props) => {
  return (
    <div className="terms-of-use-container">
      <Helmet>
        <title>Terms of User- Connectaily</title>
        <meta
          name="description"
          content='Welcome to connectaily ("us", "we", or "our"). These Terms of Use ("Terms") govern your use of the connectaily software and any related services (collectively, the "Service").'
        />
        <meta property="og:title" content="Terms of User- Connectaily" />
        <meta
          property="og:description"
          content='Welcome to connectaily ("us", "we", or "our"). These Terms of Use ("Terms") govern your use of the connectaily software and any related services (collectively, the "Service").'
        />
      </Helmet>
      <section className="terms-of-use-hero">
        <div className="terms-of-use-menu">
          <div id="mobile-menu" className="terms-of-use-mobile-navigation">
            <img
              alt="pastedImage"
              src="/connectaily%20(26)-1500h.png"
              className="terms-of-use-logo"
            />
            <div className="terms-of-use-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div
              id="close-mobile-menu"
              className="terms-of-use-close-mobile-menu"
            >
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="terms-of-use-icon"
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="terms-of-use-desktop-navigation">
            <nav className="terms-of-use-centered">
              <div className="terms-of-use-left">
                <a
                  href="https://connectaily.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="terms-of-use-link"
                >
                  <img
                    alt="pastedImage"
                    src="/connectaily%20(26)-1500h.png"
                    className="terms-of-use-logo1"
                  />
                </a>
                <div className="terms-of-use-links1">
                  <Link to="/" className="terms-of-use-navlink Link">
                    Solutions
                  </Link>
                  <Link to="/" className="terms-of-use-navlink1 Link">
                    How it works
                  </Link>
                  <Link to="/" className="terms-of-use-navlink2 Link">
                    Prices
                  </Link>
                </div>
              </div>
              <div className="terms-of-use-right">
                <a
                  href="https://app.connectaily.com/connectaily/login"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="terms-of-use-sign-in Link"
                >
                  Sign in
                </a>
                <a
                  href="https://app.connectaily.com/connectaily/register"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="terms-of-use-link01"
                >
                  <div className="terms-of-use-get-started">
                    <span className="terms-of-use-text003">Get started</span>
                  </div>
                </a>
                <div id="open-mobile-menu" className="terms-of-use-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="terms-of-use-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="terms-of-use-container2">
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
      <header className="terms-of-use-header">
        <p className="terms-of-use-text004">
          <span>Terms of Use</span>
          <br></br>
          <br></br>
          <span>
            Welcome to connectaily (&quot;us&quot;, &quot;we&quot;, or
            &quot;our&quot;). These Terms of Use (&quot;Terms&quot;) apply to
            apply to all services provided through
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://connectaily.com"
            target="_blank"
            rel="noreferrer noopener"
            className="terms-of-use-link02"
          >
            https://connectaily.com/
          </a>
          <span>
            {' '}
            by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="terms-of-use-text011">IT Whistle Corporation</span>
          <span>
            {' '}
            govern your use of the connectaily software and any related services
            (collectively, the &quot;Service&quot;). By accessing or using the
            Service, you agree to be bound by these Terms. If you do not agree
            to these Terms, please refrain from using the Service.
          </span>
          <br></br>
          <br></br>
          <span>1. Use of the Service</span>
          <br></br>
          <br></br>
          <span>
            1.1. Eligibility: You must be at least 18 years old or of legal age
            in your jurisdiction to use the Service. By accessing and using the
            Service, you represent and warrant that you have the right,
            authority, and capacity to enter into these Terms.
          </span>
          <br></br>
          <br></br>
          <span>
            1.2. License: Subject to your compliance with these Terms,
            connectaily grants you a limited, non-exclusive, non-transferable,
            and revocable license to use the Service for your personal or
            business use. This license does not permit you to resell,
            distribute, sublicense, or modify the Service.
          </span>
          <br></br>
          <br></br>
          <span>
            1.3. Account Registration: To access certain features of the
            Service, you may need to create an account. You agree to provide
            accurate and complete information during the registration process
            and to keep your account credentials secure. You are solely
            responsible for any activity that occurs under your account.
          </span>
          <br></br>
          <br></br>
          <span>
            1.4. If you register through social logins: You must log into that
            social network and accept the permissions that you grant connectaily
            through it. When registering with social account, you agree to the
            terms and conditions of the social networks you connect with. You
            can access the YouTube Terms Of Service at this link:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noreferrer noopener"
            className="terms-of-use-link03"
          >
            https://www.youtube.com/t/terms
          </a>
          <span>.</span>
          <br></br>
          <br></br>
          <span>
            1.5. Connectaily&apos;s use and transfer to any other app of
            information received from Google APIs will adhere to
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
            target="_blank"
            rel="noreferrer noopener"
            className="terms-of-use-link04"
          >
            Google API Services User Data Policy
          </a>
          <span>, including the Limited Use requirements.</span>
          <br></br>
          <br></br>
          <span>
            We will provide information regarding the process of personal data,
            which will be carried out in accordance with the provisions of the
            Privacy Policy and the present Terms and Conditions that you must
            read and, in case you agree, accept them by checking the box
            established for this purpose.
          </span>
          <br></br>
          <br></br>
          <span>2. User Content</span>
          <br></br>
          <br></br>
          <span>
            2.1. Posting Content: You may have the opportunity to post, upload,
            or submit content to the Service. By doing so, you grant connectaily
            a worldwide, non-exclusive, royalty-free, sublicensable, and
            transferable license to use, reproduce, distribute, prepare
            derivative works of, display, and perform the content in connection
            with the Service.
          </span>
          <br></br>
          <br></br>
          <span>
            2.2. Content Guidelines: When posting content, you agree not to
            submit any material that is unlawful, harmful, offensive,
            defamatory, or infringes upon the rights of others. connectaily
            reserves the right to remove any content that violates these Terms
            or is otherwise objectionable.
          </span>
          <br></br>
          <br></br>
          <span>3. Prohibited Conduct</span>
          <br></br>
          <br></br>
          <span>You agree not to:</span>
          <br></br>
          <br></br>
          <span>
            3.1. Use the Service for any illegal or unauthorized purpose;
          </span>
          <br></br>
          <br></br>
          <span>
            3.2. Interfere with or disrupt the integrity or performance of the
            Service or its servers;
          </span>
          <br></br>
          <br></br>
          <span>
            3.3. Attempt to gain unauthorized access to any part of the Service
            or other users&apos; accounts;
          </span>
          <br></br>
          <br></br>
          <span>
            3.4. Impersonate any person or entity or misrepresent your
            affiliation with any person or entity;
          </span>
          <br></br>
          <br></br>
          <span>
            3.5. Use any automated means to access the Service or collect
            information from it;
          </span>
          <br></br>
          <br></br>
          <span>
            3.6. Transmit viruses, worms, or any other destructive code through
            the Service;
          </span>
          <br></br>
          <br></br>
          <span>
            3.7. Engage in any conduct that restricts or inhibits others from
            using or enjoying the Service;
          </span>
          <br></br>
          <br></br>
          <span>
            3.8. Violate any applicable laws, regulations, or third-party
            rights.
          </span>
          <br></br>
          <br></br>
          <span>4. Intellectual Property</span>
          <br></br>
          <br></br>
          <span>
            4.1. Ownership: connectaily retains all rights, title, and interest
            in and to the Service, including all intellectual property rights.
            These Terms do not grant you any rights to use connectaily&apos;s
            trademarks, logos, or other proprietary information.
          </span>
          <br></br>
          <br></br>
          <span>
            4.2. Feedback: If you provide any feedback, suggestions, or ideas
            regarding the Service, you agree that connectaily may use and
            incorporate such feedback without any obligation to compensate you.
          </span>
          <br></br>
          <br></br>
          <span>5. Third-Party Content and Links</span>
          <br></br>
          <br></br>
          <span>
            The Service may include content from third parties or links to
            third-party websites. connectaily is not responsible for the
            accuracy, legality, or appropriateness of such content or websites.
            Your interactions with third parties, including advertisers, are
            solely between you and the third party.
          </span>
          <br></br>
          <br></br>
          <span>6. Modifications to the Service and Terms</span>
          <br></br>
          <br></br>
          <span>
            connectaily may update, modify, or discontinue the Service, or these
            Terms, at any time without prior notice. It is your responsibility
            to review these Terms periodically for any changes. Your continued
            use of the Service after any modifications to these Terms
            constitutes your acceptance of such changes.
          </span>
          <br></br>
          <br></br>
          <span>7. Disclaimer of Warranties</span>
          <br></br>
          <br></br>
          <span>
            THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS
            AVAILABLE&quot; BASIS. connectaily MAKES NO REPRESENTATIONS OR
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE
            SERVICE&apos;S MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NON-INFRINGEMENT. YOUR USE OF THE SERVICE IS AT YOUR OWN RISK.
          </span>
          <br></br>
          <br></br>
          <span>8. Limitation of Liability</span>
          <br></br>
          <br></br>
          <span>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, connectaily SHALL
            NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE
            OF THE SERVICE.
          </span>
          <br></br>
          <br></br>
          <span>9. Indemnification</span>
          <br></br>
          <br></br>
          <span>
            You agree to indemnify and hold connectaily, its affiliates,
            officers, directors, employees, and agents harmless from any claim,
            demand, loss, or damages, including reasonable attorneys&apos; fees,
            arising out of your use of the Service, your violation of these
            Terms, or your violation of any rights of a third party.
          </span>
          <br></br>
          <br></br>
          <span>10. Governing Law and Dispute Resolution</span>
          <br></br>
          <br></br>
          <span>
            These Terms shall be governed by and construed in accordance with
            the laws of Maryland state laws and regulations. Any dispute arising
            under or relating to these Terms or the Service shall be resolved
            exclusively in the state or federal courts located in Maryland state
            laws and regulations, and you hereby consent to the personal
            jurisdiction of such courts.
          </span>
          <br></br>
          <br></br>
          <span>Entire Agreement</span>
          <br></br>
          <br></br>
          <span>
            These Terms constitute the entire agreement between you and
            connectaily regarding the Service and supersede all prior and
            contemporaneous agreements, representations, and understandings.
          </span>
          <br></br>
          <br></br>
          <span>Contact Us</span>
          <br></br>
          <br></br>
          <span>
            If you have any questions or concerns about these Terms or the
            Service, please contact us at
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="mailto:admin@connectaily.com?subject=Support"
            className="terms-of-use-link05"
          >
            admin@connectaily.com
          </a>
          <span>.</span>
          <br></br>
          <br></br>
          <span>
            By using the Service, you acknowledge that you have read,
            understood, and agreed to these Terms.
          </span>
          <br></br>
          <br></br>
          <span>Thank you for choosing connectaily!</span>
        </p>
      </header>
      <section className="terms-of-use-banners"></section>
      <footer className="terms-of-use-footer">
        <div className="terms-of-use-top">
          <div className="terms-of-use-left1">
            <span className="terms-of-use-text139">
              Subscribe to our newsletter
            </span>
            <div className="terms-of-use-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="terms-of-use-textinput input"
              />
              <div className="terms-of-use-subscribe">
                <span className="terms-of-use-text140">Subscribe</span>
              </div>
            </div>
            <span className="terms-of-use-text141">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="terms-of-use-contact">
              <span className="terms-of-use-text142">Contact</span>
              <a
                href="mailto:admin@connectaily.com?subject=Support"
                className="terms-of-use-link06"
              >
                admin@connectaily.com
              </a>
            </div>
          </div>
        </div>
        <div className="terms-of-use-bottom">
          <div className="terms-of-use-container3">
            <div className="terms-of-use-container4">
              <div className="terms-of-use-container5">
                <div className="terms-of-use-container6">
                  <span className="terms-of-use-text143">
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
              className="terms-of-use-link07"
            >
              <img
                alt="image"
                src="/logo_white_background-200h.jpg"
                className="terms-of-use-image"
              />
            </a>
            <span className="terms-of-use-text148">
              <br></br>
              <br></br>
              <span>
                                                                               
                 
              </span>
              <a
                href="https://connectaily.com/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="terms-of-use-link08"
              >
                Privacy
              </a>
              <span>
                 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://app.connectaily.com/pages/terms"
                target="_blank"
                rel="noreferrer noopener"
                className="terms-of-use-link09"
              >
                Te
              </a>
              <span className="terms-of-use-text153">rms of use</span>
              <span>
                 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="mailto:admin@connectaily.com?subject=Support"
                className="terms-of-use-link10"
              >
                Email us 
              </a>
              <span> </span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TermsOfUse
