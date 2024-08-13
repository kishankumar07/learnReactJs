// let darkMode =()=>{
//     console.log('darkMode is ');
// }
// let ligtMode =()=>{
//     console.log('LightMode')
// }
let val = false;

let clickHandler = ()=>{
    val = !val;
    val ? console.log('DarkMode') : console.log('LightMode')
}

function ToggleButton(){
    return(
        <div>
           <button onClick={clickHandler}>
                Click Me
           </button>
        </div>
    )
}


export default ToggleButton