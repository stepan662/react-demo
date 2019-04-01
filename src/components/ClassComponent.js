import React from 'react'

class ClassComponent extends React.Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    this.setState({
      clicked: true,
    })
  }

  render() {
    const { clicked } = this.state
    return (
      <div onClick={this.handleClick}>
        Im class component {clicked && 'clicked'}
      </div>
    )
  }
}

export default ClassComponent
