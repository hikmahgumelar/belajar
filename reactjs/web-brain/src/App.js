import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as tfc from '@tensorflow/tfjs';
import {MobileNet} from './mobilenet.js';
import gambar from './assets/dumbbell.jpg'
class App extends Component {
constructor(){
super();
this.state = {
  tampil :''
}
}
  
  componentDidMount(){
 const tebak = async () => {   
  const gbr = document.getElementById('gbr');
const mobileNet = new MobileNet();
await mobileNet.load();
console.timeEnd('Load isi Model');

const pixel = tfc.fromPixels(gbr);
console.time('Memprediksi...');
let hasil = mobileNet.predict(pixel);
const topK = mobileNet.getTopKClasses(hasil, 2);
console.timeEnd('Selesai memprediksi');

topK.forEach(x => {
  this.Setstate({ tampil : `${x.value.toFixed(3)} : ${x.label}`
  })
})

mobileNet.dispose();
}
tebak();
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <img src={gambar} id='gbr' alt='gbr'/>
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.tampil}
        </p>
      </div>
    );
  };
}

export default App;
