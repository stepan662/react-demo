import React from 'react'

const FunctionComponent = props => {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div onClick={() => setClicked(true)}>
      Im function component {clicked && 'clicked'}
    </div>
  )
}

export default FunctionComponent
