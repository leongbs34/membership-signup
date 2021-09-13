import React, { Component } from 'react'
import styles from '../styles/Confirmation.module.css'

export default class Confirmation extends Component {
  render() {
    const {showConfirmation, hideConfirmation, submitForm} = this.props;
    return (
      <>
        {showConfirmation && 
          <div className={styles.bg}>
            <div className={styles.flex}>
              <div className={styles.text}>Are you sure this is the correct information?</div>
              <div className={styles.selection}>
                <button className={`${styles.btn} ${styles.green}`} onClick={submitForm}>Yes</button>
                <button className={`${styles.btn} ${styles.red}`} onClick={hideConfirmation}>No</button>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}
