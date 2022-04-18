import React from "react";
import './login.css';
import Axios from "axios";
import {
    Image,
    Button,
    InputGroup,
    FormControl,
    Modal,

} from 'react-bootstrap'
import {
    ORNAMENT,
    OVAL
} from '../../assets/index';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false,
            error: false,
            errorLogin: false
        }
    }

    onLogin = () => {
        let email = this.refs.email.value
        let password = this.refs.password.value
        // console.log(email, password)
        if (!email || !password) {
            return this.setState({ error: true })
        }

        // Axios.get(`http://localhost:2000/users?email=${email}&password${password}`)
        //     .then(res => {
        //         console.log(res.data)
        //     })

        this.props.login(email, password)


    }


    render() {
        console.log(this.props.dataUser)
        const { visibility } = this.state
        return (
            <div className="allbody">
                <div className="ornament">
                    <Image className="orna" src={ORNAMENT} />
                </div>
                <div className="right">
                    <Image className="oval" src={OVAL} />
                    <div className="selamat-datang">Selamat Datang Kembali</div>
                    <div className="silahkan-masukkan-em">Silahkan masukan email dan password Anda</div>
                    <div className="email-">
                        <label className="emaill" >Email</label>
                        <InputGroup className="mb-3">
                            <InputGroup>
                                <InputGroup id="basic-addon1">
                                    <i className="fas fa-user-circle"></i>
                                </InputGroup>
                            </InputGroup>
                            <FormControl
                                placeholder="email@email.com"
                                ref="email"
                            // onKeyDown={(e) => this.clickEnter(e)}
                            />
                        </InputGroup>

                        <label className="emaill" >Password</label>
                        <InputGroup className="mb-3" >
                            <InputGroup>
                                <InputGroup id="basic-addon1" onClick={() => this.setState({ visibility: !visibility })}>
                                    {visibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </InputGroup>
                            </InputGroup>
                            <FormControl
                                placeholder="Password"
                                type={visibility ? "text" : "password"}
                                ref="password"
                            // onKeyDown={(e) => this.clickEnter(e)}
                            />
                        </InputGroup>

                        {/* <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className="emaill" >Email</Form.Label>
                                    <Form.Control type="email" placeholder="email@email.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className="emaill" >Password</Form.Label>
                                </Form.Group>
                            </Form> */}
                    </div>

                    <div className="components-link-text-link">Lupa Password</div>
                    <Button className="masuk-"> Masuk
                        {/* <Button onClick={this.onLogin} className='masuk-' variant="danger" type="submit">
                            Masuk
                        </Button> */}
                    </Button>

                </div>
                <Modal show={this.state.error}>
                    <Modal.Header>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please input all of data!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.setState({ error: false })} variant="primary">OK</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.props.errorLogin}>
                    <Modal.Header>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>This account is doesn't exist!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.errLoginFalse} variant="primary">OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorLogin: state.userReducer.errorLogin,
        dataUser: state.userReducer
    
    }
}

export default connect(mapStateToProps, { login } )(LoginPage)
