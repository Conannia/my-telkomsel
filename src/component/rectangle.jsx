import React from "react";
import './rectangle.css';
import oval from '../assets/@0.5xOval.png';


class Rectangle extends React.Component {
    render() {
        return (
            <div className="allrec">
                <div className="title">
                    <img className='t' src={oval} alt="@0.5xOval" />
                    <div className="sfa">SFA Telkomsel</div>
                </div>
                <div className="poin">

                </div>
            </div>
        )
    }
}

export default Rectangle