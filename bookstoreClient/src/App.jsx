import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MyFooter from "./components/MyFooter.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navbar></Navbar>
          <div className='min-h-screen'>
              <Outlet/>
          </div>
          <MyFooter/>



      </>

  )
}

export default App
