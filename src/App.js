import React, { Component } from 'react'
import './styles/App.css';
import Header from './components/Header';
import Subscription from './components/Subscription';
import Form from './components/Form';


export default class App extends Component {
  constructor(){
    super();

    this.state = {
      showHeader: false,
      showForm: false,
      planType: '',
      showConfirmation: false,
      personalInfo: {
        name: '',
        email: '',
        phone: '',
        plan: '',
      },
    }
    this.clickSignUp = this.clickSignUp.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  clickSignUp = (e) => {
    this.setState({ showHeader: true });
    e.currentTarget.disabled = true;
  }

  toggleForm = (e) => {
    if(e.currentTarget === e.target){
      this.toggleScroll();
      this.setState({ 
        showForm: !this.state.showForm,
      });
    }
  }

  clickContact = (plan) => {
    this.toggleScroll();
    this.setState({
      showForm: true,
      planType: plan,
    })
  }

  handleForm = (e) => {
    e.preventDefault();
    let form = document.querySelector("form");
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    this.setState({
      showConfirmation: true,
      personalInfo: {
        name: formProps['name'],
        email: formProps['email'],
        phone: formProps['phone'],
        plan: formProps['plan'],
      },
    })
  }

  toggleScroll = () => {
    document.querySelector('body').classList.toggle('stopScroll');
  }

  hideConfirmation = () => {
    this.setState({ showConfirmation: false});
  }

  submitForm = () => {
    console.log(this.state.personalInfo);
    this.setState({ showForm: false});
    this.hideConfirmation();
    this.toggleScroll();
  }

  render() {
    return (
      <>
        <div className="main">
          <Header clickSignUp={this.clickSignUp} showHeader={this.state.showHeader}/>
          <Subscription clickContact={this.clickContact} showHeader={this.state.showHeader}/>
          <Form 
            showForm={this.state.showForm} 
            planType={this.state.planType} 
            handleForm={this.handleForm} 
            toggleForm={this.toggleForm}
            showConfirmation={this.state.showConfirmation} 
            hideConfirmation={this.hideConfirmation} 
            submitForm={this.submitForm}
          />
        </div>
      </>
    )
  }
}

