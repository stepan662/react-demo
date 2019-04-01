import React from 'react'

const FunctionComponent = props => {
  const { clicked, handleClicked } = props

  return (
    <div onClick={handleClicked}>
      Im function component {clicked && 'clicked'}
    </div>
  )
}

export default FunctionComponent
