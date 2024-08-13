import {Component} from 'react'

class ClassBasedComponent extends Component{

//simple example to demonstrate class based component example , using button click toggle effect. When button is pressed, the text will hide and button is again pressed text is seen in yellow .

//  state = {
//     btnClicked:false,

// }
//above one is commented, as using constructor also this can be done.
    constructor(props){
        super(props);

        this.state = {
            btnClicked:false,
            setColor:false
        };
    }
    
   

    toggleText=()=>{
        console.log('button clicked')
        this.setState({btnClicked:!this.state.btnClicked,setColor:!this.state.setColor})
    }

    render(){

        const {btnClicked,setColor} = this.state;

        return(
            <div>
                {console.log(this.state)}
                {btnClicked ? null : setColor ? <h3 style={{color:'red'}}>Class based component</h3> : <h3 style={{color:'yellow'}}>Class based component</h3>}
                
                <button onClick={()=>{this.toggleText()}}>Toggle text</button>
            </div>
        )
    }
}

export default ClassBasedComponent