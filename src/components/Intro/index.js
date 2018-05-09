import React from 'react'
import styles from './intro.module.css'

class Intro extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 data-fade className={this.props.prefade}>Welcome to KAPP Developments.</h2>
        <p data-fade className={this.props.prefade}>
          We are a team of highly skilled tradespeople and engineers, passionate about getting the job done to utmost customer satisfaction. We're proud to have a gained a solid reputation in East Gippsland over the last decade, and are now extending our operations to Far North Queensland.
        </p>
        <p data-fade className={this.props.prefade}>
          We specialize in building, extensions, renovations, earthworks, outdoor decking, landscaping, rendering, etc. etc.
          We can assist from the very beginning of your project with our project management and estimation expertise etc. etc.
        </p>
        <br /><br />
      </div>
    )
  }
}

export default Intro
