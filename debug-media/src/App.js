import React,{Component} from 'react';
import './App.css';

class App extends Component {
  state={
    stringOne:'Hello',
    stringTwo:'World',
    stringThree:'Todo',
  };

  render(){
    return(
      <div className='App'>
        <h1>{this.state.stringOne}</h1>
        <h2>{this.state.stringTwo}</h2>
        <h3>{this.state.stringThree}</h3>
      </div>
    )
  }
}
export default App