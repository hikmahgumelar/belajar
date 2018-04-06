import React, { Component } from 'react';

class Form extends Component {
 jalankan(event){
    event.preventDefault();
    let statusBaru = this.refs.masukan.value;

    this.setState ({ statusNow : statusBaru });
 
 }
constructor() {
    super();
    this.state = {
      
      statusNow :'',
    
    }
  
  }




render (){
return (
          <div>
            <form>
            <input type="text" ref="masukan" />
            <button onClick={this.jalankan.bind(this)}>
            Tekan bro..!!!
            </button>
            </form>
            <h1>{this.state.statusNow}</h1>
          </div>
    )
}
}

export default Form;
