import React from "react";
import './rectangle.css';
import {
    Image,
    Button,
} from 'react-bootstrap'
import { OVAL } from '../assets'


class Rectangle extends React.Component {
    render() {
        return (
            <div className="allrec">
                <div className="title">
                    <Image className="oval" src={OVAL} />
                    <div className="sfa">SFA Telkomsel</div>
                </div>
                <div className="poin">
                    <Button className='dashboard' > Dashboard </Button>
                    <Button className='purchase-order' > Purchase Order </Button>
                    <Button className='laporan' > Laporan </Button>
                </div>
            </div>
        )
    }
}

export default Rectangle