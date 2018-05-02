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
          marginBottom: '1.45rem',
          boxShadow: 'rgb(154, 151, 151) 0px 1px 4px 0px',
          // transform: 'translateY(' + this.state.headPos + ')',
          // transition: 'transform 0.6s',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: '#585858',
                textDecoration: 'none',
                fontSize: '20px',
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
