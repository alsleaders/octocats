import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container />
      </>
    )
  }
}
export default App
