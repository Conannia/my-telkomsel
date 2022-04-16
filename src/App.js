
import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/login/login'
import ForgotPassword from './pages/forgotPassword/forgotPassword'
import PasswordBaru from './pages/forgotPassword/passwordBaru';
import ForgotPasswordBerhasil from './pages/forgotPassword/forgotPasswordBehasil';
import Profil from './pages/profil/profil';
import Dashboard from './pages/profil/dashboard';
import UbahPasswordBerhasil from './pages/forgotPassword/ubahPaswordBerhasil';
import UbahPasswordProfile from './pages/profil/ubahPasswordProfile';
import PasswordBaruProfile from './pages/profil/passwordBaruProfile';
import NotifikasiPage from './pages/notifikasi/notifikasiPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} exact/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/passwordbaru" element={<PasswordBaru/>}/>
        <Route path="/forgotpasswordberhasil" element={<ForgotPasswordBerhasil/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/loginn" element={<UbahPasswordBerhasil/>}/>
        <Route path="/ubahpasswordprofile" element={<UbahPasswordProfile/>}/>
        <Route path="/passwordbaruprofile" element={<PasswordBaruProfile/>}/>
        <Route path="/notifikasi" element={<NotifikasiPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
