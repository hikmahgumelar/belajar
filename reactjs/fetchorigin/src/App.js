import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
super()
this.state = {
  pesan: '',
}

}

componentDidMount(){
  const opsi = {
    methode: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Origin':'',
      'Authorization': 'scY7dAy6gxpcfkooU6TxM2nyUF83DOfW9/gGBf1jTV7ZzXYKJBQUGSy08B2WXu4P'

    }
  }

  const ambildata = async () => {

     //const baseURI = 'http://wahidganteng.ga/process/api/ca7a091d7a53bb8df780b1bb2d3450cb/cek-resi';
     const baseURI = 'http://api.jakarta.go.id/v1/emergency/ambulance';
     const results = await fetch(baseURI, opsi)
     const hasil = await results.json();   
     console.log(hasil);
  }
ambildata();
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
