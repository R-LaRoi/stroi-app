import React from 'react'
import {Routes, Route} from "react-router-dom";
import Connect from './Components/Connect'
import './App.css'
import Homepage from './Components/Homepage'
import ProjectsLink from './Components/ProjectsLink'


function App() {
  return (
    <>
       <Routes>
        <Route index element={<Homepage/>} ></Route>
           <Route exact path="/projects" element={<ProjectsLink />} />
         <Route exact path="/connect" element={
           <Connect />} /> 
            <Route path="/main" element={
           <Homepage />} />
       </Routes>
    </>
  )
}

export default App
