import React from "react";
import './navprofile.css';
import {
    Navbar,
    Container,
} from 'react-bootstrap'

class NavProfile extends React.Component {
    render() {
        return (
            <div className="navbody">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavProfile