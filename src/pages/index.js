import React from 'react'
import Link from 'gatsby-link'
import LogoAni from '../components/LogoAni'
import Intro from '../components/Intro'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
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
      prefade: styles.prefade,
      restFade: styles.prefade,
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.prefade();
    }, 6000);
  }

  prefade() {
    let prefaders = document.querySelectorAll('[data-fade]');
    [].map.call(prefaders, (el, index) => (
      el.style.transitionDelay = (index+1) * 0.2 + 's',
      this.setState({
        prefade: styles.prefade__active,
      })
    ));
    let restDelay = (prefaders.length + 1) * 200;
    setTimeout(() => {
      this.setState({
        restFade: styles.prefade__active,
      })
    }, restDelay)

  }

  render() {
    return (
      <div>
        <LogoAni />
        <Intro prefade={this.state.prefade}/>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <Gallery restFade={this.state.restFade} album={deckAlbum} />
        <Contact restFade={this.state.restFade} />
      </div>
    )}
}
// )

export default IndexPage
