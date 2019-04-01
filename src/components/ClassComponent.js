import React from 'react'

class ClassComponent extends React.Component {
  render() {
    const { clicked, handleClick } = this.props
    return (
      <div onClick={handleClick}>Im class component {clicked && 'clicked'}</div>
    )
  }
}

export default ClassComponent
