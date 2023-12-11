import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Connect from './Components/Connect'
import './App.css'
import Homepage from './Components/Homepage'
import ProjectsLink from './Components/ProjectsLink'
import Header from './Components/Header'

function App() {
  return (
    <>
<Homepage />
 <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
<Route index element={ <Header />} />
           <Route index element={ <Homepage />} />
           <Route exact path="projects" element={<ProjectsLink />} />
           <Route exact path="connect" element={
           <Connect />} />
            <Route exact path="main" element={
           <Homepage />} />
         </Route>
       </Routes>

     </BrowserRouter> 
      
      
      <div>
    
      
      </div>
    </>
  )
}

export default App
