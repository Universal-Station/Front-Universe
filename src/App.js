
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterUser from "./components/forms/RegisterUser";
import Navbar from "./components/navbar/NavBar";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/RegisterUser" element={<RegisterUser/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App