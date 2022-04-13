import React from "react";
import './dashboard.css';
import NavProfile from "../../component/navprofile";
import Rectangle from "../../component/rectangle";

class Dashboard extends React.Component {

    render() {
        return (
            <div className="alldashboard">
                <Rectangle />
                <div className="right">
                    <NavProfile />
                    <div className="dash-content">
                        <div className="coba">Test</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard