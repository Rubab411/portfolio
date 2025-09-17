import React from "react";
import {Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App(){
  return(
    <>
      
      <Routes>
        <Route element={<About/>} path="/"></Route>
        <Route element={<Resume/>} path="/resume"></Route>
        <Route element={<Portfolio/>} path="/portfolio"></Route>
        <Route element={<Blog/>} path="/blog"></Route>
        <Route element={<Contact/>} path="/contact"></Route>
      </Routes>
    
    </>
  )
}
export default App;