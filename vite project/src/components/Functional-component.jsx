import ProductList from './products/ProductList'

// function FunctionalComponent(){
//     return(
//         <h2>Hello world</h2>
//     )
// }
let FunctionalComponent =({name,age,dummyProductsData})=>{
    let flag = false;
    function renderTextBlock(getFlag){
      return  getFlag ? <h3>His name is {name} and age is {age}</h3> : <h2>Hello world</h2>
    }



    return (
       <>
            <h2>again another text</h2>
            {/* <ProductList  /> */}
            {renderTextBlock(flag)}
           
            <ul>
                {
                    dummyProductsData.map((item,i)=> 
                    <ProductList list={item} key = {i}/>)
                }
            </ul>
       </>
    )
}
export default FunctionalComponent;