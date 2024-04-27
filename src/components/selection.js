import React from 'react'

import PropTypes from 'prop-types'

import './selection.css'

const Selection = (props) => {
  return (
    <div className="selection-selection">
      <span className="selection-text">{props.text}</span>
      <span className="selection-text1">{props.text1}</span>
    </div>
  )
}

Selection.defaultProps = {
  text1: 'Yearly',
  text: 'Monthly',
}

Selection.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Selection
