import React from "react";
import './profil.css';
import NavProfile from "../../component/navprofile";
import Rectangle from "../../component/rectangle";

class Profil extends React.Component {

    render() {
        return (
            <div className="allprofil">
                <Rectangle />
                <div className="right">
                    <NavProfile />
                    <div className="content">
                        Profil
                    </div>
                    <div className="box-profile">
                        <div className="box-one">Wanda</div>
                        <div className="box-two">Data</div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Profil