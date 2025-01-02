
import './App.css';

import Ticket from './Component/Conference Ticket/Ticket'
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider,Routes} from "react-router-dom"
import Created from './Component/Created Conference Ticket/Created';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <>
     <Route index element={<Ticket/>}/>
     <Route path='/ticket' element={<Ticket/>}/>
     <Route path='created' element={<Created/>}/>
     </>
    )
  )
  return (
    <>
    <main className='Coding-Conf'>
    <RouterProvider router={router}/>
    </main>
    </>
  )
}

export default App
