import {useEffect, useState} from 'react';

const FirstComponent = () => {

    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    useEffect(()=>{
        console.log('mount');
        console.log('count1'+count1);
        console.log('count2'+count2);
    },[count1,count2])


  return (
    <div>
        <button onClick={()=>{setCount1(count1+1)}}>+</button>
        <h3>Count1 : {count1}</h3>

        <button onClick={()=>{setCount2(count2+1)}}>+</button>
        <h3>Count2 : {count2}</h3>
    </div>
  )
}

export default FirstComponent
