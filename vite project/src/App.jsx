import FunctionalComponent from "./components/functional-component"
import './App.css'
import ClassBasedComponent from "./components/class-components";
function App() {



let dummyProductData = ['Product11','Product22','Product3'];

  return (
  <div>
    <h1 className='title'>Some text below this</h1>
    <ClassBasedComponent/>
    {/* <FunctionalComponent dummyProductsData={dummyProductData} name='Kishan.ta' age='27'/> */}
  </div>
  )
}

export default App
