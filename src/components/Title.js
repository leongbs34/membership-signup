import React, { Component } from 'react'
import '../styles/Title.css'

export default class Title extends Component {
  render() {
    return (
      <div className='flex'>
        <div className="title">
            CHOOSE <span className='coloredText'>PLAN</span>
        </div>
      </div>
    )
  }
}
