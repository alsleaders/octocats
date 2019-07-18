import React, { Component } from 'react'
import Footer from './Footer'
import Cat from './Cat'

// const cats = [
//   {
//     imageUrl: 'https://octodex.github.com/images/doctocat-brown.jpg',
//     name: 'the Doctocat Brown by',
//     number: '#68',
//     makerUrl: 'https://github.com/jonrohan.png'
//   },
//   {
//     imageUrl: 'https://octodex.github.com/images/octobiwan.jpg',
//     name: 'the Octobi Wan Catnobi by',
//     number: '#3',
//     makerUrl: 'https://github.com/cameronmcefee.png'
//   },
//   {
//     imageUrl: 'https://octodex.github.com/images/stormtroopocat.png',
//     name: 'the Stormtroopocat by',
//     number: '#86',
//     makerUrl: 'https://github.com/jeejkang.png'
//   },
//   {
//     imageUrl: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
//     name: 'the Octocat De Los Muertos by',
//     number: '#56',
//     makerUrl: 'https://github.com/cameronmcefee.png'
//   },
//   {
//     imageUrl: 'https://octodex.github.com/images/heisencat.png',
//     name: 'the Heisencat by',
//     number: '#78',
//     makerUrl: 'https://github.com/jonrohan.png'
//   },
//   {
//     imageUrl: 'https://octodex.github.com/images/justicetocat.jpg',
//     name: 'the Justicetocat by',
//     number: '#136',
//     makerUrl: 'https://github.com/heyhayhay.png'
//   }
// ]

const API_URL = 'https://sdg-octodex.herokuapp.com/'

class Container extends Component {
  state = {
    cats: []
  }

  componentDidMount() {
    fetch(`${API_URL}`)
      .then(resp => {
        console.log(resp.json)
        return resp.json()
      })
      .then(items => {
        console.log(items.data)
        this.setState({ cats: items.data })
      })
  }

  render() {
    return (
      <>
        <div class="container">
          <section class="main-body">
            {this.state.cats.map(cat => {
              return (
                <Cat
                  key={cat.name}
                  image={cat.image}
                  name={cat.name}
                  number={cat.number}
                  makerURL={cat.authors[0].image}
                />
              )
            })}
          </section>
          <Footer />
        </div>
      </>
    )
  }
}

export default Container
