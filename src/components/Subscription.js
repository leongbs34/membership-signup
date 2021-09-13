import React, { Component } from 'react'
import '../styles/Subscription.css'
import Title from './Title'
import Card from './Card'

export default class Subscription extends Component {
  render() {
    const {clickContact, showHeader} = this.props;
    return (
      <>
        {showHeader &&
          <>
            <Title />
            <div className="cardContainer">
              <Card planType='FREE' price='0' info={{duration: 1, grade: 3, downloadable: false, one: false}} clickContact={clickContact}/>
              <Card planType='PRO' price='50' info={{duration: 2, grade: 5, downloadable: true, one: true}} clickContact={clickContact}/>
              <Card planType='ULTIMATE' price='100' info={{duration: 4, grade: 8, downloadable: true, one: true}} clickContact={clickContact}/>
            </div>
          </>
        }
      </>
    )
  }
}
