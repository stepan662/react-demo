import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'
import MyContext from './MyContext'

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

          <MyContext.Provider
            value={{
              clicked,
              handleClick: this.handleClick,
            }}
          >
            <ClassComponent />
            <FunctionComponent />
          </MyContext.Provider>
        </header>
      </div>
    )
  }
}

export default App
