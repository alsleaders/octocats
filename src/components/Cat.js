import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div>
        <div class="outer-image">
          <img class="image-area" src={this.props.imageUrl} />
          <section class="caption">
            <p>{this.props.number}</p>
            <div class="name-pic">
              <p>{this.props.name}</p>
              <img src={this.props.makerUrl} />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Cat
