// import React from 'react';
import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/login/login'
import ForgotPassword from './pages/forgotPassword/forgotPassword'
// import {
//   Image
// } from 'react-bootstrap'
// import { ORNAMENT3 } from '.assets'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} exact/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
