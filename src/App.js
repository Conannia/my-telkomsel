// import React from 'react';
import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/login/login'
// import {
//   Image
// } from 'react-bootstrap'
// import { ORNAMENT3 } from '.assets'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
