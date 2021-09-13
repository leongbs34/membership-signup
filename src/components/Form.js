import React, { Component } from 'react'
import styles from '../styles/Form.module.css'
import Confirmation from './Confirmation';

export default class Form extends Component {
  render() {
    const {showForm, planType, handleForm, toggleForm, showConfirmation, hideConfirmation, submitForm} = this.props;
    return (
      <>
        {showForm && 
            <div className={styles.bg} onClick={(e) => toggleForm(e)}>
              <div className={`${styles.flex} ${styles.container}`}>
                <h2 className={styles.title}>Contact Us</h2>
                <div>
                  <form className={styles.formFlex}>
                    <div className={`${styles.formRow} ${styles.inputText} ${styles.formInput}`}>
                      <label htmlFor="name" className={styles.smallLabel}>FULL NAME*</label>
                      <input id='name' name='name'  type="text" placeholder='Enter your name' required={true}/>
                    </div>

                    <div className={`${styles.formRow} ${styles.flexRow}`}>
                      <div className={`${styles.inputText} ${styles.seperateCol}  ${styles.formInput}`}>
                        <label htmlFor="email" className={styles.smallLabel}>EMAIL*</label>
                        <input id='email' name='email' type="email" placeholder='Enter your email' required={true}/>
                      </div>

                      <div className={`${styles.inputText} ${styles.seperateCol}  ${styles.formInput}`}>
                        <label htmlFor="phone" className={styles.smallLabel}>PHONE</label>
                        <input id='phone' name='phone' type="text" placeholder='Enter your number'/>
                      </div>
                    </div>

                    <div className={`${styles.formRow}  ${styles.formInput} ${styles.radioInput}`}>
                      <p className={styles.smallLabel}>SELECT THE PLAN YOU WOULD LIKE TO SUBSCRIBE</p><br/>

                      <input type="radio" name="plan" id="free" value='free' disabled={planType === 'free' ? false : true} defaultChecked={planType === 'free' ? true : false}/>
                      <label htmlFor="free">Free</label><br/>

                      <input type="radio" name="plan" id="pro" value='pro' disabled={planType === 'pro' ? false : true} defaultChecked={planType === 'pro' ? true : false}/>
                      <label htmlFor="pro">Pro</label><br/>

                      <input type="radio" name="plan" id="ultimate" value='ultimate' disabled={planType === 'ultimate' ? false : true} defaultChecked={planType === 'ultimate' ? true : false}/>
                      <label htmlFor="ultimate">Ultimate</label><br/>
                    </div>

                    <button type="submit" className={`${styles.btnSubmit} ${styles.formRow}`} onClick={(e) => handleForm(e)}>Submit</button>
                  </form>
                </div>
              </div> 
              <Confirmation 
                showConfirmation={showConfirmation} 
                hideConfirmation={hideConfirmation} 
                submitForm={submitForm}
              />
            </div>
        }
      </>
    )
  }
}
