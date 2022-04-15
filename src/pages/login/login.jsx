import React from "react";
import './login.css';
import {
    Image,
    Form,
    Button,

} from 'react-bootstrap'
import {
    ORNAMENT,
    OVAL
} from '../../assets/index';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="allbody">
                <div className="ornament">
                    <Image className="orna" src={ORNAMENT} />
                </div>
                <div className="right">
                    <Image className="oval" src={OVAL} />
                    <div className="selamat-datang">Selamat Datang Kembali</div>
                    <div className="silahkan-masukkan-em">Silahkan masukan email dan password Anda</div>
                    <div className="emaill">Email</div>
                    <Form.Control className="frame" type="email" placeholder="email@email.com" />
                    <div className="email-">
                        <Form>
                            <Form.Group>
        
                                
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="password" >Password</Form.Label>
                                <Form.Control className="framee" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='components-link-text-link'>Lupa Password?</Form.Label>
                            </Form.Group>
                            <Button className='masuk-' variant="danger" type="submit">
                                Masuk
                            </Button>
                        </Form>
                    </div>

                </div>

            </div>

        )
    }
}

export default LoginPage
