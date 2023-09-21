
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav.jsx'
import Home from './component/home/Home.jsx'
import Details from './component/details/Details.jsx'



function App() {
  return (
    <>
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/Mahmoud-AlDabba-React-Project' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
