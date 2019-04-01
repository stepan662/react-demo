import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'

class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ClassComponent clicked={clicked} handleClick={this.handleClick} />
          <FunctionComponent clicked={clicked} handleClick={this.handleClick} />
        </header>
      </div>
    )
  }
}

export default App
