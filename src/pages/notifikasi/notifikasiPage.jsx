import React from "react";
import NavProfile from "../../component/navprofile";
import Rectangle from "../../component/rectangle";
import './notifikasiPage.css';

class NotifikasiPage extends React.Component {
    render() {
        return (
            <div className="all-notification-page">
                <Rectangle />
                <div className="notifikasi-title">
                    <NavProfile />
                    <div className="notifikasi">Notifikasi</div>
                    <div className="notifikasi-box">
                        Notifikasi box
                    </div>
                </div>
            </div>
        )
    }
}

export default NotifikasiPage