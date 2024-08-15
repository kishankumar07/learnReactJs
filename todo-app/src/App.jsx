
import './App.css'

function App() {


  return (
    <div className='min-h-screen flex flex-col gap-5 items-center justify-center p-20 bg-custom-background bg-center bg-cover'>  
       <div className='bg-gray-100 p-6 rounded shadow-2xl w-full max-w-lg lg:w-1/2'>
         <h1 className='text-3xl font-bold text-center mb-4'>Todo-app</h1>
            <div className='flex justify-evenly'>
                <input className='w-full px-2 py-4 border rounded-lg focus:outline-none mr-2' type="text" placeholder='Add a to-do' />
                <button className='bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-2 rounded text-white'>Add</button>
            </div>
        </div>

        <div className='bg-gray-100 p-6 rounded shadow-2xl w-full max-w-lg lg:w-1/2'>
              <ul>
                  <li className='flex justify-between items-center bg-white p-3 shadow-md rounded mb-5'>
                      <span className='text-lg'>Learn React</span>
                      <div>
                         <button className=' mr-2 bg-gradient-to-r from-slate-300 to-gray-500 p-2 rounded text-white'>Edit</button>
                         <button className='bg-gradient-to-r from-rose-400 to-rose-500 p-2 text-white rounded'>Remove</button>
                      </div>
                  </li>

                  <li className='flex justify-between items-center bg-white p-3 shadow-md rounded'>
                      <span className='text-lg'>Learn React</span>
                      <div>
                         <button className=' mr-2 bg-gradient-to-r from-slate-300 to-gray-500 p-2 rounded text-white'>Edit</button>
                         <button className='bg-gradient-to-r from-rose-400 to-rose-500 p-2 text-white rounded'>Remove</button>
                      </div>
                  </li>

              </ul>
        </div>

    </div>
  )
}

export default App
