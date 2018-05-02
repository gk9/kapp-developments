import React from 'react'
import Link from 'gatsby-link'
import Deck from '../components/Deck'
import Gallery from '../components/Gallery'

const deckAlbum = [
  require('../../static/vic0.jpg'),
  require('../../static/vic1.jpg'),
  require('../../static/vic2.jpg'),
  require('../../static/cummings0.jpg'),
  require('../../static/cummings1.jpg')
]

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Gallery album={deckAlbum}/>
    <Deck />
  </div>
)

export default SecondPage
