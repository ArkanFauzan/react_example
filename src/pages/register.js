import { useState, useEffect } from "react";
import { Row, Col, Button, Input, FormFeedback, Label } from "reactstrap";
import '../styles/register.css'

const RegisterPage = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [err, setErr] = useState({
        email:false,
        password:false,
        repassword:false
    })

    useEffect(()=>{
        if(repassword.length==0 || repassword==password){
            setErr({
                email: err.email,
                password: err.password,
                repassword: false
            })
        }else if(repassword!==password){
            setErr({
                email: err.email,
                password: err.password,
                repassword: true
            })
        }
    },[repassword])

    const handleSubmit = async ()=>{
        const valid = await validate();
        if(valid){
            alert('registrasi berhasil')
        }
    }

    const validate = async ()=>{
        const errEmail = !email.match(/\S+@\S+.\S+/) ? true : false;
        const errPass = password.length === 0 ? true : false;
        let errRepass = repassword.length === 0 ? true : false;

        if(!errRepass && repassword!==password){ errRepass = true };

        setErr({
            email:errEmail,
            password:errPass,
            repassword:errRepass
        })

        return !errEmail && !errPass && !errRepass ? true : false;
    }

    return(
        <div className="register">
            <div className="form_container">
                <h1>SOPIC</h1>
                <div className="form">
                    <p>Create Your Account</p>
                    <Row>
                        <Row>
                            <Label>Email</Label>
                            <Input 
                                type="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                invalid={err.email}
                            />
                            <FormFeedback>{err.email && "Format email salah"}</FormFeedback>
                        </Row>
                        <Row>
                            <Label>Password</Label>
                            <Input 
                                type="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                invalid={err.password}
                            />
                            <FormFeedback>{err.password && "Password harus diisi"}</FormFeedback>
                        </Row>
                        <Row>
                            <Label>Retype Password</Label>
                            <Input 
                                type="password"
                                value={repassword}
                                onChange={(e)=>setRepassword(e.target.value)}
                                invalid={err.repassword}
                            />
                            <FormFeedback>{err.repassword && "Password tidak sesuai"}</FormFeedback>
                        </Row>
                        <Row>
                            <Button className="btn_register" onClick={()=>handleSubmit()}>Create Account</Button>
                        </Row>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;