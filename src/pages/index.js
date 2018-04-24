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



const IndexPage = () => (
  <div>
    <h1>Decking</h1>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* <Deck /> */}
    <Gallery album={deckAlbum}/>
  </div>
)

export default IndexPage
