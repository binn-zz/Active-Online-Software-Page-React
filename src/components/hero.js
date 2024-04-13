import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <section className="hero-hero">
      <div className="hero-menu">
        <div id="mobile-menu" className="hero-mobile-navigation">
          <img alt={props.logoAlt} src={props.logoSrc} className="hero-logo" />
          <div className="hero-links">
            <span className="Link">{props.text}</span>
            <span className="Link">{props.text1}</span>
            <span className="Link">{props.text2}</span>
          </div>
          <div id="close-mobile-menu" className="hero-close-mobile-menu">
            <svg viewBox="0 0 804.5714285714286 1024" className="hero-icon">
              <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
            </svg>
          </div>
        </div>
        <div className="hero-desktop-navigation">
          <nav className="hero-centered">
            <div className="hero-left">
              <img
                alt={props.logoAlt1}
                src={props.logoSrc1}
                className="hero-logo1"
              />
              <div className="hero-links1">
                <span className="Link">{props.text3}</span>
                <span className="Link">{props.text4}</span>
                <span className="Link">{props.text5}</span>
              </div>
            </div>
            <div className="hero-right">
              <span className="hero-sign-in Link">{props.signIn}</span>
              <div className="hero-get-started">
                <span className="hero-text6">{props.text6}</span>
              </div>
              <div id="open-mobile-menu" className="hero-burger-menu">
                <img
                  alt={props.mobileMenuButtonAlt}
                  src={props.mobileMenuButtonSrc}
                  className="hero-mobile-menu-button"
                />
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className="hero-container1">
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
      <header className="hero-header"></header>
      <div className="hero-dashboard-preview"></div>
    </section>
  )
}

Hero.defaultProps = {
  logoSrc1: '/connectaily%20(26)-1500h.png',
  logoAlt1: 'pastedImage',
  logoAlt: 'pastedImage',
  mobileMenuButtonAlt: 'pastedImage',
  signIn: 'Sign in',
  text4: 'How it works',
  text: 'Solutions',
  text5: 'Prices',
  text1: 'How it works',
  text3: 'Solutions',
  text6: 'Get started\n',
  mobileMenuButtonSrc: '/pastedimage-yxbd.svg',
  text2: 'Prices',
  logoSrc: '/connectaily%20(26)-1500h.png',
}

Hero.propTypes = {
  logoSrc1: PropTypes.string,
  logoAlt1: PropTypes.string,
  logoAlt: PropTypes.string,
  mobileMenuButtonAlt: PropTypes.string,
  signIn: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
  mobileMenuButtonSrc: PropTypes.string,
  text2: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Hero
