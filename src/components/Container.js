import React, { Component } from 'react'
import Footer from './Footer'
import Cat from './Cat'

class Container extends Component {
  render() {
    return (
      <div class="container">
        <Cat />
        <Footer />
      </div>
    )
  }
}

export default Container
