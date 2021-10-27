
import './App.css';
import React, { Component } from 'react'
import Routes from './routes'
//import Kard from './components/fragments/kard'
//import Dashboard from './components/pages/dashboard'


export default class App extends Component {
  render() {
    return (
      <div>
        {console.log("Client")}
      <Routes/>
      </div>
    )
  }
}
//  <Kard/>
//     

