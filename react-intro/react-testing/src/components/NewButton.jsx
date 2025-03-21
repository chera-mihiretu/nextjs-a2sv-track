import React from 'react'
import PropTypes from 'prop-types';

const NewButton = (onClick) => {
  return (
    <button onClick={onClick}></button>
  )
}

NewButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

NewButton.defaultProps = {
    onClick: () => {}
}

export default NewButtun 
