import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div>
        <div class="outer-image">
          <img
            class="image-area"
            src="https://octodex.github.com/images/doctocat-brown.jpg"
          />
          <section class="caption">
            <p>{this.props.number}</p>
            <div class="name-pic">
              <p>{this.props.name}</p>
              <img src="https://github.com/jonrohan.png" />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Cat
