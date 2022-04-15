import React from "react";
import './profil.css';
import NavProfile from "../../component/navprofile";
import Rectangle from "../../component/rectangle";
import {
    Button
} from 'react-bootstrap';

class Profil extends React.Component {

    render() {
        return (
            <div className="allprofil">
                <Rectangle />
                <div className="kanan">
                    <NavProfile />
                    <div className="profil">Profil</div>
                    <div className="box-profile">
                        <div className="box-one">
                            <div className="foto"></div>
                            <div className="wanda-maximoff">
                                Wanda Maximoff
                            </div>
                            <div className="management">Management</div>
                            <Button className='ubah-password-profile' variant="danger" type="submit">
                                Ubah Password
                            </Button>
                        </div>
                        <div className="box-two">
                            <div className="informasi-umum">Informasi Umum</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profil