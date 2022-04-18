import React from "react";
import './ornamen.css';
import {
    Image,
} from 'react-bootstrap'
import { ORNAMENT } from '../assets'

class Ornamen extends React.Component {
    render() {
        return (
            <div className="body-ornament">
                <Image className="orna-img" src={ORNAMENT} />
            </div>
        )
    }
}

export default Ornamen