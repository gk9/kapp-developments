import React from 'react'
import styles from './contact.module.css'

class Intro extends React.Component {
  render() {
    return (
      <div className={this.props.restFade}>
        <div className={styles.contactContainer}>
          <h3>Contact</h3>
          <p>Give the boss a call: 01234 01234</p>
          <div className={styles.contactBoss}></div>
        </div>
      </div>
    )
  }
}

export default Intro
