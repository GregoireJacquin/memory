import React from 'react'
import PropTypes from 'prop-types'

import './GuessCount.css'

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.PropType = {
    guesses : PropTypes.number.isRequired,
}
export default GuessCount