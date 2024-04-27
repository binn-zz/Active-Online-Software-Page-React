import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing-switch-monthly.css'

const PricingSwitchMonthly = (props) => {
  const [pricingSwitch, setPricingSwitch] = useState('Monthly')
  return (
    <div className="pricing-switch-monthly-container">
      <span className="pricing-switch-monthly-text">{props.text}</span>
    </div>
  )
}

PricingSwitchMonthly.defaultProps = {
  text: 'Monthly',
}

PricingSwitchMonthly.propTypes = {
  text: PropTypes.string,
}

export default PricingSwitchMonthly
