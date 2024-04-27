import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing-switch-yearly.css'

const PricingSwitchYearly = (props) => {
  const [pricingSwitch, setPricingSwitch] = useState('Yearly')
  return (
    <div className="pricing-switch-yearly-container">
      <span className="pricing-switch-yearly-text">{props.text}</span>
    </div>
  )
}

PricingSwitchYearly.defaultProps = {
  text: 'Yearly',
}

PricingSwitchYearly.propTypes = {
  text: PropTypes.string,
}

export default PricingSwitchYearly
