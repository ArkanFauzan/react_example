import {useState, useEffect} from 'react'
import { Row, Col, Label, FormFeedback, Input, Button } from 'reactstrap';
import '../styles/login.css'

const LoginPage = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState({
        email:false,
        password:false
    })

    const handleSubmit = async () =>{
        let valid = await validate();
        if(valid){
            alert('success')
        }
    }

    const validate = async ()=>{
        let errEmail = !email.match(/\S+@\S.\S+/) || email.length === 0 ? true : false;
        let errPassword = password.length === 0 ? true : false ;

        setErr({
            email:errEmail,
            password:errPassword
        })

        let valid = errEmail || errPassword ? false : true;
        return valid;
    }

    return(
        <div className="login">
            <Row className="navbar">
                <Col xs="7" sm="10" md="7" className="app_name_header">
                    SOSPIC
                </Col>
                <Col xs="5" sm="2" md="5" className="btn_redirect">
                    <a href="/register"> Register</a>
                </Col>
            </Row>

            <Row>
                <Col className="wording" md="6">
                    <Row className="desc_1">
                        Welcome to your playground community
                    </Row>
                    <Row className="desc_2">
                        Explore and get many topics!!
                    </Row>
                </Col>
                <Col className="form" md="6">
                    <Row className="title">
                        Sign in
                    </Row>
                    <Col className="col_field">
                        <Label>Email</Label>
                        <Input 
                        type="emal"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        invalid={err.email}
                        />
                        <FormFeedback>{err.email && "format email tidak sesuai"}</FormFeedback>
                    </Col>
                    <Col className="col_field">
                        <Label>Password</Label>
                        <Input
                        type="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        invalid={err.password}
                        />
                        <FormFeedback>{err.password && "password harus diiisi"}</FormFeedback>
                    </Col>
                    <Row>
                        <Button className="btn_login" onClick={()=>handleSubmit()}>Sign In</Button>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage;