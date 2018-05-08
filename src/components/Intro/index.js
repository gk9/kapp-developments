import React from 'react'
import styles from './intro.module.css'
class Intro extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     entered: false,
  //     prefade: styles.prefade,
  //   };
  // }

  // componentDidMount() {
  //   console.log(this.state.entered);
  //   if (!this.state.entered) {
  //     setTimeout(() => {
  //         prefade();
  //     }, 7000);
  //     this.setState({
  //       entered: true,
  //     });
  //     console.log('2:', this.state.entered);
  //   }
  //
  // }
  //
  // prefade() {
  //   let prefaders = document.querySelectorAll('[data-fade]');
  //   [].map.call(prefaders, (el, index) => (
  //     el.style.transitionDelay = (index+1)*0.2 + 's',
  //     this.setState({
  //       prefade: styles.prefade__active
  //     })
  //   ))
  // }

  render() {
    return (
      <div className={styles.container}>
        <h2 data-fade className={this.props.prefade}>Welcome to KAPP Developments.</h2>
        <p data-fade className={this.props.prefade}>We are a team of highly skilled tradespeople, passionate about getting the job done to utmost customer satisfaction.<br />
        Check out our services below:</p><br />
        <ul data-fade className={this.props.prefade}>
          <li>service 0</li>
          <li>service 1</li>
          <li>service 2</li>
          <li>service 3</li>
        </ul>
        <br /><br />
      </div>
    )
  }
}

export default Intro
