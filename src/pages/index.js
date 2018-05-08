import React from 'react'
import Link from 'gatsby-link'
import LogoAni from '../components/LogoAni'
import Intro from '../components/Intro'
import Gallery from '../components/Gallery'
import styles from '../components/Intro/intro.module.css'

const deckAlbum = [
  require('../../static/vic0.jpg'),
  require('../../static/vic1.jpg'),
  require('../../static/vic2.jpg'),
  require('../../static/cummings0.jpg'),
  require('../../static/cummings1.jpg')
]


// const IndexPage = () => (
class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sx: 1,
      entered: false,
      prefade: styles.prefade,
    };
  }

  componentDidMount() {
    console.log(this.state.entered);
    if (!this.state.entered) {
      setTimeout(() => {
          this.prefade();
      }, 7000);
      setTimeout(() => {
        this.setState({
          entered: true,
        });
      }, 100)

      console.log('2:', this.state.entered);
    }

  }

  prefade() {
    let prefaders = document.querySelectorAll('[data-fade]');
    [].map.call(prefaders, (el, index) => (
      el.style.transitionDelay = (index+1) * 0.2 + 's',
      this.setState({
        prefade: styles.prefade__active,
      })
    ));
  }

  render() {
    return (
      <div>
        <LogoAni />
        <Intro prefade={this.state.prefade}/>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <Gallery album={deckAlbum} />
      </div>
    )}
}
// )

export default IndexPage
