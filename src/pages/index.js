import React from 'react'
import Link from 'gatsby-link'
import LogoAni from '../components/LogoAni'


// const IndexPage = () => (
class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sx: 1,
    };
  }

  handleClick = () => {

    this.setState({
      sx: 0.5,
    })

  }

  render() {
    return (
      <div>
        <LogoAni />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        {/* <h1 onClick={this.handleClick} style={{opacity: this.state.sx}}>Decking</h1> */}
        <Link to="/page-2/">Go to page 2</Link>


      </div>
    )}
}
// )

export default IndexPage
