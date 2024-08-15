import {Component} from 'react';

//simple example to demonstrate class based component example , using button click toggle effect. When button is pressed, the text will hide and button is again pressed text is seen in yellow .

//  state = {
//     btnClicked:false,

// }
//above one is commented, as using constructor also this can be done.

  class ClassBasedComponent extends Component {

    state = {
        btnClicked : false,
        setColor:false
    }

    btnClicked(){
        this.setState({btnClicked:!this.state.btnClicked,setColor:!this.state.setColor})
    }

    render(){

        const {btnClicked,setColor} = this.state;

        return(
            <>
            {btnClicked ? null : <h2 style={{color:setColor ? 'red': 'yellow'}}>Click to toggle</h2>}
              
               <button onClick={()=>{this.btnClicked()}}>Click here</button>
            </>
           
        )
    }
  }
  export default ClassBasedComponent