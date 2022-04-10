import React from 'react';
import ornamen from '../assets/Ornament@1,5x.png';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='body'>
                <div><img src={ornamen} alt="Ornament@1,5x" /></div>
            </div>
        )

    }
}



export default ForgotPassword