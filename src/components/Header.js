import React, { Component } from 'react'
import '../styles/Header.css'

export default class Header extends Component {
  render() {
    const {clickSignUp, showHeader} = this.props;
    return (
      <div className={(showHeader ? 'bg-banner ': 'bg ') + 'flex'}>
          <button className={(showHeader ? 'btnDisabled ': 'btn ') + 'textBG'} onClick={(e) => clickSignUp(e)}>
            <h2>SIGN UP FOR MUSIC LESSONS</h2>
          </button>
      </div>
    )
  }
}
