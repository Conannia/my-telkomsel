import React from "react";
import './passwordBaruProfile.css';
import NavProfile from "../../component/navprofile";
import Rectangle from "../../component/rectangle";
import {
    Image,
    Form,
    Button,
} from 'react-bootstrap'
import {
    MOBILE,
} from '../../assets/index';

class PasswordBaruProfile extends React.Component {
    render() {
        return (
            <div className="all-password-baru-profile">
                <Rectangle />
                <div className="content-password-baru-profile">
                    <NavProfile />
                    <div className="ubah-passwordd">Ubah Password</div>
                    <div className="box-password-baru-profile">
                        <Image className="mobile" src={MOBILE} />
                        <div className="password-baru-content">
                            <div className="masukan-pass-baru-anda">Masukkan password baru Anda.</div>
                            <div className="new-password-input">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Konfirmasi Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button className="konfirmasii" >Konfirmasi</Button>
                                </Form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PasswordBaruProfile