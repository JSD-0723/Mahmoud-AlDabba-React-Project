import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Details from './pages/details/Details.jsx';
import LayOut from './component/LayOut/LayOut.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Mahmoud-AlDabba-React-Project" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route
              path="Mahmoud-AlDabba-React-Project/details/:id"
              element={<Details />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
