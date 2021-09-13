import React, { Component } from 'react'
import '../styles/Card.css'
import styles from '../styles/Card.module.css'

export class Card extends Component {
  render() {
    const {planType, price, info, clickContact} = this.props;
    
    return (
      <div className='card'>
        <h3>{planType}</h3>
        <div className='price'>RM{price}</div>
        <div className="subDuration">PER MONTH</div>
        <div className="info">
          <p><span className="green">✔</span> <span className='orange'>{info.duration}</span> hour lesson</p>
          <p><span className="green">✔</span> Live</p>
          <p><span className="green">✔</span> Up to Grade <span className="orange">{info.grade}</span></p>
          <p><span className={info.downloadable ? 'green' : 'red'}>{info.downloadable ? '✔' : '✘'}</span>  Downloadable materials</p>
          <p><span className={info.one ? 'green' : 'red'}>{info.one ? '✔' : '✘'}</span> One-to-one lesson</p>
        </div>
        <button className={`${styles.btn} buttonDeco`} onClick={() => clickContact(planType.toLowerCase())}>Contact Us</button>
      </div>
    )
  }
}

export default Card
