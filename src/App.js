
import React from 'react'
import Home from './components/home/Home'
import Home2 from './components/home/Home2'
import { Route,Routes , Navigate } from 'react-router-dom'
// import Cv1 from './components/cv/Cv1'
// import Cv2 from './components/cv/Cv2'

export default function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/fa' element={<Home2/>} />
      {/* <Route path='/cv' element={<Cv1/>} />
      <Route path='/cv/fa' element={<Cv2/>} /> */}
      <Route path='/' element={<Navigate to='' />} />
     </Routes>
    </>
  )
}
