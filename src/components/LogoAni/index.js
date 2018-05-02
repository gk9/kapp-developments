import React from 'react'
import styles from './pathAni.module.css'


class LogoAni extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pathLength0: 1552,
      pathOffset0: 1552,
      pathLength1: 1004,
      pathOffset1: 1004,
      pathLength2: 403,
      pathOffset2: 403,
      house0x: '-10%',
      windowStyle: 0,
      transition0: '',
      transition1: '',
      transition2: '',
    };
  }

  componentDidMount() {
    // let hpLength0 = document.querySelector('#house0').getTotalLength();
    // let hpLength1 = document.querySelector('#house1').getTotalLength();
    // let hpLength2 = document.querySelector('#house2').getTotalLength();
    // this.setState({
    //   pathLength0: hpLength0,
    //   pathOffset0: hpLength0,
    //   pathLength1: hpLength1,
    //   pathOffset1: hpLength1,
    //   pathLength2: hpLength2,
    //   pathOffset2: hpLength2,
    //
    // });
    setTimeout(() => {
      this.setState({
        transition0: 'stroke-dashoffset 2s, transform 1s 4s',
        transition1: 'stroke-dashoffset ease-out 2s 2s',
        transition2: 'stroke-dashoffset 1s 4s',
        pathOffset0: 0,
        pathOffset1: 0,
        pathOffset2: 0,
        house0x: 0,
        windowStyle: 1,
      });
    },1000);
  }

  handleClick = () => {
    this.setState({
      transition0: 'stroke-dashoffset 2s, transform 1s 4s',
      transition1: 'stroke-dashoffset ease-out 2s 2s',
      transition2: 'stroke-dashoffset 1s 4s',
      pathOffset0: 0,
      pathOffset1: 0,
      pathOffset2: 0,
      house0x: 0,
      windowStyle: 1,
    });
    // if (!this.state.drawn) {
    //   this.setState({
    //     drawn: true,
    //     pathOffset0: 0,
    //     pathOffset1: 0,
    //     pathOffset2: 0,
    //     house0x: 0,
    //   });
    // } else {
    //   this.setState({
    //     drawn: false,
    //     pathOffset0: this.state.pathLength0,
    //     pathOffset1: this.state.pathLength1,
    //     pathOffset2: this.state.pathLength2,
    //     house0x: '-10%',
    //   });
    // }
  }

  render() {

    const houseStyle0 = {
      strokeDasharray: this.state.pathLength0,
      strokeDashoffset: this.state.pathOffset0,
      transform: 'translateX(' + this.state.house0x + ')',
      transition: this.state.transition0,
    }
    const houseStyle1 = {
      strokeDasharray: this.state.pathLength1,
      strokeDashoffset: this.state.pathOffset1,
      transition: this.state.transition1,
    }
    const houseStyle2 = {
      strokeDasharray: this.state.pathLength2,
      strokeDashoffset: this.state.pathOffset2,
      transition: this.state.transition2,
    }
    const windowStyle = {
      opacity: this.state.windowStyle,
    }

    return (
      <div className={styles.aniContainer}>
        {/* <h1 onClick={this.handleClick}>press</h1> */}
        <svg className={styles.houseSvg}viewBox="0 0 746 355">
          <g fill="none" fillRule="evenodd">
            <polygon
              className={`${styles.path} ${styles.house0}`}
              id="house0"
              strokeLinecap="square"
              points="733 342 111.996779 342 111.996779 300.987885 473 30 733 236"
              style={houseStyle0}>
            </polygon>
            <path
              className={`${styles.path} ${styles.house2}`}
              id="house2"
              d="M379,48 L57,290"
              style={houseStyle2}>
            </path>
            <polyline
              className={`${styles.path} ${styles.house1}`}
              id="house1"
              points="587 355 587 207.966671 347 19 198 134 198 81 157 81 157 164 9 277"
              style={houseStyle1}>
            </polyline>
            <rect style={windowStyle} x="349" y="213" width="50" height="36"></rect>
            <rect style={windowStyle} x="417" y="213" width="50" height="36"></rect>
            <rect style={windowStyle} x="417" y="264" width="50" height="36"></rect>
            <rect style={windowStyle} x="349" y="264" width="50" height="36"></rect>
          </g>
        </svg>
      </div>
    )
  }
}

export default LogoAni
