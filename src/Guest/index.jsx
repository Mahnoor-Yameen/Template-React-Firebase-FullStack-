import React from 'react'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'

export default function Guest() {
  return (
    <>
    
    <Routes>
      
      <Route path = "/" element={<Home/>}/>
      <Route path = "/section" element={<Home/>}/>
      <Route path = "/hairdresser" element={<Home/>}/>
      <Route path = "/hairessential" element={<Home/>}/>
      <Route path = "/hairunit" element={<Home/>}/>
      {/* <Route path = "/" element={<Home/>}/> */}

      <Route path = "/refund" element={<Home/>}/>
      <Route path = "/privacy" element={<Home/>}/>
      <Route path = "/shipping" element={<Home/>}/>
      <Route path = "/terms" element={<Home/>}/>
      <Route path = "/hairextension" element={<Home/>}/>

      <Route path = "/searchinput" element={<Home/>}/>
      <Route path = "/login" element={<Home/>}/>
      <Route path = "/register" element={<Home/>}/>
      <Route path = "/blog" element={<Home/>}/>
      <Route path = "/contactus" element={<Home/>}/>

    </Routes>
    
    </>
  )
}
