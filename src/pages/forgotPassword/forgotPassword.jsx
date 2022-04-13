import React from 'react';
import {
    Form,
    Button,

} from 'react-bootstrap'
import './forgotPassword.css';
import ornamen from '../../assets/Ornament@0,5x.png';
import oval from '../../assets/@0.5xOval.png';

class ForgotPassword extends React.Component {
    

    render() {
        return (
            <div className='body'>
                <div className='wall'>
                    <div ><img className='a' src={ornamen} alt="Ornament@0,5x" /></div>
                </div>
                <div className='welcome'>
                    <img className='t' src={oval} alt="@0.5xOval" />
                    <div className="lupa">Lupa Password Anda?</div>
                    <div className="silahkan">Silahkan masukkan email dan kami akan mengirimkan panduan untuk mengubah password Anda</div>
                    <div className="email">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="myemail@mailer.com" />
                            </Form.Group>
                            <Button className='kirim' variant="danger" type="submit">
                                Kirim
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )

    }
}



export default ForgotPassword