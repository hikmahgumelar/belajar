import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TfImageRecognition } from 'react-native-tensorflow';


class App extends Component {

   constructor() {
    super();
    this.image = require('./assets/dumbbell.jpg');
    this.state = {result:''}
  }
   componentDidMount(){
    this.recognizeImage()
   }

   async recognizeImage() {
   try {
    const tfImageRecognition = new TfImageRecognition({
      model: require('./assets/tensorflow_inception_graph.pb'),
      labels: require('./assets/tensorflow_labels.txt')
    
    })
   const results = await tfImageRecognition.recognize({
    image: this.image
   })
   const resultText = `Name: ${results[0].name} - Confidence: ${results[0].confidence}`
     this.setState({result: resultText})

     await tfImageRecognition.close()
   } catch(err) {
     alert(err)
   }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={this.image} alt='test bray'/>
        <p className="App-intro">
        Gambar di atas adalah :
        <h3>{this.state.result}</h3>
        </p>
      </div>
    );
  }
}

export default App;
