import React from "react";
import './forgotPasswordBerhasil.css';
import {
    Button
} from 'react-bootstrap'
import success from '../assets/Success_Boy Girl.png';

class ForgotPasswordBerhasil extends React.Component {

    render() {
        return (
            <div className="all">
                <div><img className='s' src={success} alt="Success_Boy Girl.png" /> </div>
                <div className="right">
                    <div className="berhasil">Berhasil!</div>
                    <div className="segera">Segera cek email Anda untuk menyelesaikan proses pengubahan password Anda.</div>
                    <div className="k">
                        <Button className="kembali" variant="danger" type="submit">
                            Kembali
                        </Button>
                    </div>
                    <div className="tidak">Tidak menerima email?</div>
                </div>
            </div>
        )
    }

}

export default ForgotPasswordBerhasil