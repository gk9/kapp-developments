import React from 'react'
import Link from 'gatsby-link'

class Stump extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      delay: this.props.delay,
      vis: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
        vis: 1
      })
    }, 0);
  }

  render() {
    return (
      <div
        style={{
          border: '3px solid red',
          marginBottom: '1.45rem',
          transform: 'rotate(-45deg)',
          width: '50px',
          height: '50px',
          transition: 'opacity 0.3s',
          transitionDelay: this.state.delay + 's',
          opacity: this.state.vis,
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: '50px',
            padding: '1.45rem 1.0875rem',
            border: '3px dashed',
            borderColor: '#000',
            position: 'absolute',
            top: '90px',

          }}
        >
          <div style={{ margin: 0 }}>
            hi {this.props.pos}
          </div>
        </div>
      </div>
    )
  }

}
export default Stump
