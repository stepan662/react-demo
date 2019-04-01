import React from 'react'
import MyContext from '../MyContext'

const FunctionComponent = props => {
  const context = React.useContext(MyContext)

  return (
    <div onClick={context.handleClick}>
      Im function component {context.clicked && 'clicked'}
    </div>
  )
}

export default FunctionComponent
