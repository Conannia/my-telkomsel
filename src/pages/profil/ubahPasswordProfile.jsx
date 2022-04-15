import React from "react";
import './ubahPasswordProfile.css';
import NavProfile from "../../component/navprofile";
import Rectangle from "../../component/rectangle";
import {
    Image,
    Button,
} from 'react-bootstrap'
import {
    MOBILE,
} from '../../assets/index';

class UbahPasswordProfile extends React.Component {
    render() {
        return (
            <div className="all-ubah-password-profile">
                <Rectangle />
                <div className="content-ubah-password-profile">
                    <NavProfile />
                    <div className="ubah-password">Ubah Password</div>
                    <div className="box-ubah-password">
                        <Image className="mobile" src={MOBILE} />
                        <div className="ubah-pass-content">
                            <div className="kami-telah-mengirimk">
                                Kami telah mengirimkan pesan berisi nomor OTP ke nomor handphone Anda. Segera cek pesan Anda dan masukkan nomor OTP ke dalam form yang tersedia. Jangan berikan nomor OTP Anda ke siapapun.
                            </div>
                            <div className="otp-line">
                                <div className="otp-box">cek</div>
                                <div className="otp-box">cek</div>
                                <div className="otp-box">cek</div>
                                <div className="otp-box">cek</div>
                            </div>
                            <div className="otp-ulang">
                                <div className="kirim-ulang-otp">Tidak menerima otp? </div>
                                <div className="kirim-ulang">Kirim ulang</div>
                            </div>
                                <Button className="konfirmasia" >Konfirmasi</Button>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default UbahPasswordProfile