import React from 'react'
import MyContext from '../MyContext'

class ClassComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div onClick={context.handleClick}>
            Im class component {context.clicked && 'clicked'}
          </div>
        )}
      </MyContext.Consumer>
    )
  }
}

export default ClassComponent
