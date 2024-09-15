import { Routes,Route } from 'react-router'
import './App.css'
import Register from './components/Authentication/register'
import Navbar from './components/Home/navbar'
import Main from './components/Home/Main'
import bootstrap from 'bootstrap'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/home' element={<Main/>}  />
    </Routes>
     
    </>
  )
}

export default App
