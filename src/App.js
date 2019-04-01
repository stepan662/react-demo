import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ClassComponent from './components/ClassComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ClassComponent />
        </header>
      </div>
    )
  }
}

export default App
