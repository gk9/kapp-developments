import React from 'react'
import Link from 'gatsby-link'

import Stump from '../Stump'

class Deck extends React.Component {


  componentDidMount() {

  }

  render() {

    return (
      <div
        style={{
          border: '3px solid skyblue',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: '50%',
            padding: '1.45rem 1.0875rem',
            border: '3px dashed #ccc',
          }}
        >
          <div style={{ margin: 0, }}>
            <Stump delay='0.1' pos='sdfg'/>
            <Stump delay='0.2'/>
            <Stump delay='0.3'/>
            <Stump delay='0.4'/>
          </div>
        </div>
      </div>
    )
  }
}




export default Deck
