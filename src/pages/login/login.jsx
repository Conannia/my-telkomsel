import React from 'react';
import {
    Form,
    Button,

} from 'react-bootstrap'
import './login.css';
import ornamen from '../assets/Ornament@0,5x.png';
import oval from '../assets/@0.5xOval.png';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='body'>
                <div className='wall'>
                    <div ><img className='a' src={ornamen} alt="Ornament@0,5x" /></div>
                </div>
                <div className='welcome'>
                    <img className='t' src={oval} alt="@0.5xOval" />
                    <div className="selamat">Selamat Datang Kembali</div>
                    <div className="silahkan">Silahkan masukkan email dan password Anda</div>
                    <div className="email">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="email@email.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label className='lupa-password'>Lupa Password?</Form.Label>
                            </Form.Group>
                            <Button className='masuk' variant="danger" type="submit">
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