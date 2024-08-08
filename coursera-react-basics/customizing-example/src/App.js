import React,{Component} from 'react';
import './App.css';

class App extends Component {

state = {
  myString:'Hello Machu',
  myStringOne:"Debug",
};

  render(){
    return(
      <div className='App'>
          <h1>{this.state.myString}</h1>
      </div>
    )
  }
}

export default App;