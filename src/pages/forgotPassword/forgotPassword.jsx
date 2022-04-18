import React from 'react';
import {
    Form,
    Button,

} from 'react-bootstrap'
import './forgotPassword.css';
import Ornamen from '../../component/ornamen';
import { OVAL } from '../../assets'
import {
    Image,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'


class ForgotPassword extends React.Component {


    render() {
        return (
            <div className='body'>
                <Ornamen />
                <div className='welcome'>
                    <Image className='oval' src={OVAL} />
                    <div className="lupa">Lupa Password Anda?</div>
                    <div className="silahkan-masukkan-email">Silahkan masukkan email dan kami akan mengirimkan panduan untuk mengubah password Anda</div>
                    <div className="email">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="myemail@mailer.com" />
                            </Form.Group>
                            <Button className='kirim' as={Link} to="/forgotpasswordberhasil" variant="danger" type="submit">
                                Kirim
                            </Button>
                            {/* <Button className='kirim-ke' as={Link} to="/forgotpasswordberhasil">
                                Kirim
                            </Button> */}
                        </Form>
                    </div>
                </div>
            </div>
        )

    }
}



export default ForgotPassword