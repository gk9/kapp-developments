import React from 'react'
import Link from 'gatsby-link'

// const Header = () => (
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // headPos: '-100%',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        // headPos: '0%',
      });
    },6000);
  }

  render() {

    return (
      <div
        style={{
          background: '#fff',
          boxShadow: 'rgb(199, 199, 199) 0px 0px 2px 0px',
          position: 'fixed',
          width: '100%',
          zIndex: 100,
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1rem 1.0875rem',
          }}
        >
          <h1 style={{
            margin: 0,
            fontSize: '20px',
            lineHeight: 1,
            }}>
            <Link
              to="/"
              style={{
                color: '#585858',
                textDecoration: 'none',
              }}
            >
              KAPP Developments
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}
// )

export default Header
