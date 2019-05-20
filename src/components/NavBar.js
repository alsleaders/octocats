import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav class="header">
        <img src="./images/logo (1).png" />
        <div class="top-links">
          <a>RSS</a>
          <a>FAQ</a>
          <a>Back to GitHub</a>
        </div>
      </nav>
    )
  }
}

export default NavBar
