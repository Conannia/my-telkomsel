import React from 'react';
import {
    Form,
    Button,

} from 'react-bootstrap'
import './passwordBaru.css';
import ornamen from '../assets/Ornament@0,5x.png';
import oval from '../assets/@0.5xOval.png';

class PasswordBaru extends React.Component {
    
    render() {
        return (
            <div className='body'>
                <div className='wall'>
                    <div ><img className='a' src={ornamen} alt="Ornament@0,5x" /></div>
                </div>
                <div className='ubahside'>
                    <img className='t' src={oval} alt="@0.5xOval" />
                    <div className='ubah'>Ubah Password</div>
                    <div className='masukan'>Masukan Password baru Anda</div>
                    <div className='password'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password Baru</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Konfirmasi Password Baru</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className='konfirmasi' variant="danger" type="submit">
                                Konfirmasi
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )

    }
}



export default PasswordBaru