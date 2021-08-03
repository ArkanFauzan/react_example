import {useContext, useEffect, useState} from 'react';
import {Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import listTopic from'../services/topic.json'

const SidebarComponent = ()=>{

    const [posting, setPosting] = useState("");
    const [topic, setTopic] = useState("");
    const [err, setErr] = useState(false);

    //popup modal
    const [postingModal, setPostingModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);

    const handleSelect = (topicId)=>{
        setTopic(topicId)
    }

    const handleSubmit = ()=>{
        if(!err && topic!=="" && posting.length>0) {alert(`Okee`)}
    }

    useEffect(()=>{
        if(posting.length>100){setErr(true)}
    },[posting])

    return(
        <div className="sidebar">
            <div className="logo_app">SOPIC</div>
            <div className="desc_app">Share your Idea</div>
            <div className="profile">
                <p className="name">Profile</p>
                <br/>
                <Row className="desc">
                    <p>Welcome back <b>User 1</b>
                        <br/>
                        Let's share your idea
                    </p>
                </Row>
            </div>
            <Row>
                <Button className="btn_post" onClick={()=>setPostingModal(true)}>Posting</Button>
                <Button className="btn_logout" onClick={()=>setLogoutModal(true)}>Logout</Button>
            </Row>

            {/* Popup Posting */}
            <Modal isOpen={postingModal} toggle={()=>setPostingModal(!postingModal)}>
                <ModalHeader>USer 1, what you wanna post?</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={2}>
                            <p><h4>Topic</h4></p>
                        </Col>
                        <Col md={10}>
                            <Input type="select" name="select" onChange={(e)=>handleSelect(e.target.value)}>
                                <option disabled selected>select topic</option>
                                {listTopic.map(v=>{
                                    return(
                                        <option key={v.id} value={v.id}>{v.name}</option>
                                    )
                                })}
                            </Input>
                        </Col>
                    </Row>
                    <hr/>
                    <Input type="textarea" style={{height:"150px"}} value={posting} onChange={(e)=>setPosting(e.target.value)}></Input>
                    <div style={{
                        fontSize: "10pt",
                        color: `${posting.length>100 ? "red" : "gray"}`,
                        float: 'right'
                    }}>
                        {`${posting.length>100 ? "character more than 100" : 100-posting.length}`}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <span>
                        <Button onClick={()=>setPostingModal(false)}> Cancel</Button>
                        <Button onClick={()=>handleSubmit()}>Post it</Button>
                    </span>
                </ModalFooter>
            </Modal>

            {/* popup logout */}

            <Modal isOpen={logoutModal} toggle={()=>setLogoutModal(false)}>
                <ModalHeader>
                    Wanna Logout?
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <span>
                        <Button onClick={()=>setLogoutModal(false)}>Cancel</Button>
                        <Button onClick={()=>(window.location='/')}>Yes</Button>
                    </span>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default SidebarComponent;