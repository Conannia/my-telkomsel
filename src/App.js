
import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/login/login'
import ForgotPassword from './pages/forgotPassword/forgotPassword'
import PasswordBaru from './pages/forgotPassword/passwordBaru';
import ForgotPasswordBerhasil from './pages/forgotPassword/forgotPasswordBehasil';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} exact/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/passwordbaru" element={<PasswordBaru/>}/>
        <Route path="/forgotpasswordberhasil" element={<ForgotPasswordBerhasil/>}/>
      </Routes>
    </div>
  );
}

export default App;
