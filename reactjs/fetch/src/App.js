import React, { Component } from 'react';
import logo from './logo.svg';
import Frisbee from 'frisbee';
import './App.css';


const api = new Frisbee({
    //  baseURI: 'http://api.jakarta.go.id',
      baseURI: 'http://wahidganteng.ga/process/api/ca7a091d7a53bb8df780b1bb2d3450cb',
      headers: {
            'Accept': 'application/json',
                'Content-Type': 'application/json',
                  'Authorization': 'scY7dAy6gxpcfkooU6TxM2nyUF83DOfW9/gGBf1jTV7ZzXYKJBQUGSy08B2WXu4P'
                    }
});


makeRequests();
  

async function makeRequests() {

  try{
    let res = await api.get('/cek-resi');
console.log('HASILNYA : ', res.body);
this.setState({ isi: 'res.body.msg'});
   // for(let i = 0; i < res.body.VEHICLE.DATA.length;i++){
   //
   //    console.log(res.body.VEHICLE.DATA[i].GSM);
   // }
   //      if (res.err) throw res.err
  } catch (err) {
    throw err;
  
  }
  
  }
class App extends Component {
constructor(props){
  super(props)
  this.state = {
    isi: ''
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.state.isi}
        </p>
      </div>
    );
  }
}

export default App;
