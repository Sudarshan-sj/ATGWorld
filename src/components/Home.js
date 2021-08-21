import { useState } from "react";
import { Card, Navbar, Container, Nav, NavDropdown, Modal, Button, Col, Row, Dropdown, InputGroup, Form, FormGroup, DropdownButton} from "react-bootstrap";
import App from "../App";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import MaterialIcon from 'react-google-material-icons';
import {FcGoogle} from "react-icons/fc";
import { Divider } from "@material-ui/core";
import { right } from "@popperjs/core";
import { GoLocation} from "react-icons/go";
import {MdArrowDropDown,MdPersonAdd, MdEdit, MdError, MdKeyboardBackspace} from "react-icons/md"
import {BiDotsHorizontalRounded,BiCalendarEvent} from "react-icons/bi";
import {FaShareAlt, FaCircle, FaSquare} from "react-icons/fa";
import {IoEyeOutline, IoBriefcaseOutline} from "react-icons/io5";


export const Home=()=>{
    const [showLogin, setShowLogin] = useState(false);
    const [showSign, setShowSign] = useState(false);
    const handleClose = () => setShowSign(false);
    const handleShow = () => setShowSign(true);
    const handlelogin = ()=>setShowLogin(false);
    return (
        <div>
            <Navbar className="nave" collapseOnSelect expand="lg" bg="light" style={{height:"72px"}} className="d-none d-md-block">
            <Container classname="container" >
                <Navbar.Brand href="#home" style={{paddingLeft:"72px"}}><img width="162.57px" height="24px" src="atglogo.png"></img></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"> */}
                    <Nav className="justify-content-center me-auto" style={{flex:"1"}}>
                    <div className='search d-none d-md-block'>
                    <div classsName='search_input'>
                        <SearchIcon className="search_inputIcon"/>
                        <input className="inpu" placeholder="Search for your favorite groups in ATG"/>
                    </div>
                    </div>
                    </Nav>
                    {/* <InputGroup className="search">
                        <Input placeholder="Username" />
                        <InputGroupAddon addonType="prepend">
                        <FaUserAlt />
                        </InputGroupAddon>
                    </InputGroup> */}

                    <Nav>
                    <NavDropdown  className="d-none d-lg-block" style={{left:"80%",marginTop:"8px",color:"blue"}} title="Create An Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item  onClick={() => setShowSign(true)}>Sign Up</NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => setShowLogin(true)}>Login</NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown  className="d-block d-lg-none d-md-none d-sm-none d-xs-none" style={{left:"40%"}} title="Create An Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item  onClick={() => setShowSign(true)}>Sign Up</NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => setShowLogin(true)}>Login</NavDropdown.Item>
                    </NavDropdown> */}
                    <NavDropdown  className="d-block d-lg-none" style={{left:"10%"}} title="Create Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item  onClick={() => setShowSign(true)}>Sign Up</NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => setShowLogin(true)}>Login</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
        <Navbar className="d-block d-md-none" expand="lg" bg="light" style={{height:"36px",zIndex:"3"}}>
            <Nav style={{float:"right",marginRight:"10px",marginTop:"-10px",zIndex:"3"}} >
                
            {/* <MdArrowDropDown size={"20px"}></MdArrowDropDown> */}
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic" size="lg">
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setShowSign(true)}>Sign Up</Dropdown.Item>
                        <Dropdown.Item onClick={() => setShowLogin(true)}>Sign In</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
            <Nav style={{float:"right",marginRight:"0px",zIndex:"3"}}>
            <FaCircle style={{marginTop:"8px"}} size={"10px"}></FaCircle>
            </Nav>
            <Nav style={{float:"right",marginRight:"15px",zIndex:"3"}}>
            <FaSquare style={{marginTop:"8px"}} size={"10px"}></FaSquare>
            </Nav>
        </Navbar>
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered show={showSign}  onHide={handleClose} animation={false}>
        <Row style={{marginLeft:"0px", marginRight:"0px"}}>
        <Col md={12} style={{background: "#EFFFF4", textAlign:"center" }} className="d-none d-md-block">
        <Modal.Header >
          <Modal.Title className="title">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now</Modal.Title>
          <button type="button" className="close" onClick={handleClose}>×</button>
        </Modal.Header>
        </Col>
        </Row>
        <Modal.Body>
            <Container>
            <Row>
                <Col sm={12} md={6} >
                <p className="create">Create Account</p>
                <Form>
                    <Form.Group>
                        <Form.Control md={6} type="text" placeholder="First Name" />
                        <Form.Control md={6} type="text" placeholder="Last Name" />
                        <Form.Control md={6} type="email" placeholder="Email" />
                        <Form.Control md={6} type="password" placeholder="Password" />
                        <Form.Control md={6} type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <div className="d-grid gap-2" style={{paddingTop:"20px"}}>
                        <Button style={{background: "#2F6CE5",borderRadius: "20px"}} variant="primary" size="md"> Create Account</Button>
                    </div>
                    
                </Form>
                <div className="facebook" style={{marginTop:"20px",paddingTop:"6px"}}>
                   <p style={{textAlign:"center"}}><FacebookIcon style={{color:"blue"}} />Sign up with facebook</p>
                </div>
                <div className="facebook" style={{paddingTop:"6px"}}>
                   <p style={{textAlign:"center"}}><FcGoogle/>Sign up with Google</p>
                </div>
                </Col>
                <Divider orientation="vertical"/>
                <Col xs={0} md={5} className="d-none d-md-block" >
                
                 <p style={{textAlign:"right"}}>Already have an account, <a style={{color:"blue"}}>Sign In</a></p> 
                 <img src="signup.png" width="100%"></img>
                 <div style={{ position: "absolute",bottom: "0px"}}>
                    <p className="signfooter">By signing up, you agree to our Terms and Conditions, Privacy policy</p>
                 </div>
                </Col>
                <div style={{textAlign:"center"}} className="d-block d-md-none">
                    <p className="bottom">By signing up, you agree to our Terms and Conditions, Privacy policy</p>
                 </div>
            </Row>
            </Container>
        </Modal.Body>
      </Modal>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered show={showLogin}  onHide={handlelogin} animation={false} >
        <Row style={{marginLeft:"0px", marginRight:"0px"}}>
        <Col md={12} style={{background: "#EFFFF4", textAlign:"center" }} className="d-none d-md-block">
        <Modal.Header >
          <Modal.Title className="title">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now</Modal.Title>
          <button type="button" className="close" onClick={handlelogin}>×</button>
        </Modal.Header>
        </Col>
        </Row>
        <Modal.Body>
            <Container>
            <Row>
                <Col sm={12} md={6} >
                <p className="create">Sign In</p>
                <Form>
                    <Form.Group>
                        <Form.Control md={6} type="email" placeholder="Email" />
                        <Form.Control md={6} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2" style={{paddingTop:"20px"}}>
                        <Button style={{background: "#2F6CE5",borderRadius: "20px"}} variant="primary" size="md">Sign In</Button>
                    </div>
                    
                </Form>
                <div className="facebook" style={{marginTop:"20px",paddingTop:"6px"}}>
                   <p style={{textAlign:"center"}}><FacebookIcon style={{color:"blue"}} />Sign up with facebook</p>
                </div>
                <div className="facebook" style={{paddingTop:"6px"}}>
                   <p style={{textAlign:"center"}}><FcGoogle/>Sign up with Google</p>
                </div>
                <div style={{textAlign:"center",paddingTop:"20px"}}>
                    <p>Forgot Password?</p>
                </div>
                <div style={{textAlign:"center"}} className="d-block d-md-none">
                    <p className="bottom">By signing up, you agree to our Terms and Conditions, Privacy policy</p>
                 </div>
                </Col>
                <Divider orientation="vertical"/>
                <Col xs={0} md={5} className="d-none d-md-block" >
                
                 <p style={{textAlign:"right", fontSize:"12px"}}>Don't have an account yet? <a style={{color:"blue"}}>Create new for free!</a></p> 
                 <img src="signup.png" width="100%"></img>
                 <div style={{ position: "absolute",bottom: "0px"}}>
                    <p className="signfooter">By signing up, you agree to our Terms and Conditions, Privacy policy</p>
                 </div>
                </Col>
            </Row>
            </Container>
        </Modal.Body>
      </Modal>
      <div className="jumbotron" style={{backgroundImage:"url(/comp.jpeg)",height:"40vh", width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"100%"}} >
          <div className="d-block d-md-none"  >
          <MdKeyboardBackspace size={"32px"} style={{color:"white", marginLeft:"20px",marginTop:"20px"}}></MdKeyboardBackspace>
          <Button className="bg-light" style={{color:"black" ,float:"right",marginRight:"20px",marginTop:"20px"}}>Join Group</Button>
          </div>
          <div className="d-block d-md-none" style={{bottom:"10px",marginTop:"100px"}}> 
              <h3 style={{color:"white", paddingLeft:"20px"}}>Computer Engineering</h3>
              <p style={{color:"white", paddingLeft:"20px"}}>142,765 Computer Engineers follow this</p>
          </div>
          <div className="d-none d-md-block" style={{bottom:"10px",paddingTop:"25vh"}}> 
              <h3 style={{color:"white", paddingLeft:"300px",fontSize:"40px"}}>Computer Engineering</h3>
              <p style={{color:"white", paddingLeft:"300px",fontSize:"20px"}}>142,765 Computer Engineers follow this</p>
          </div>
          
        {/* <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p> */}
    </div>
      {/* <img className="img-responsive" src="atgworld computer engineering photo.png"></img> */}
      <div>
      <Row style={{marginTop:"50px"}} >
        <Col md={1} lg={2} className="d-none d-md-block" >
        </Col>
        <Col md={10} lg={6} sm={12}>
            <Row >
            <Col className="d-none d-md-block">
                <Nav variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">All Posts(32)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Article</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                        Event
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                        Education
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                        Job
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
             </Col>
             </Row>
            <Row>
            <Col className="d-block d-md-none"  >
                <div  style={{marginLeft:"10px"}}>
                <Button className="bg-light" style={{ border:"none",color:"black"}}>Posts(368)</Button>
                <Button className="bg-light" style={{ border:"1px solid black",color:"black",float:"right",marginRight:"10px"}}>Filter:All<MdArrowDropDown></MdArrowDropDown></Button>
                </div>
            </Col>
            </Row>
   
     <Row>
     <Card style={{ width: '100%', marginTop:"20px",paddingLeft:"0px", paddingRight:"0px",paddingTop:"0px"}}>
  <Card.Img variant="top" src="1st.png" style={{margin:"0px"}}/>
  <Card.Body>
  <img src="article.png" style={{paddingBottom:"10px"}}></img>
     <Row>    
    <Col xs={10} >
    <Card.Title>What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
    </Col>
    <Col xs={2}>
        <BiDotsHorizontalRounded size={"32px"}></BiDotsHorizontalRounded>
    </Col>
    </Row>
    <Card.Text >
    <div className="text">I’ve worked in UX for the better part of a decade. The role of a UXer is evolving and what it means for those who want to pursue a career in UX now.</div>
      
    </Card.Text>
    <div >
         <img src="sarthakkamra.png" style={{float:"left"}}></img>
         <p style={{paddingLeft:"10px", paddingTop:"10px",float:"left",fontWeight:"bold"}}>Sarthak Kamra</p>
         <FaShareAlt size={"30px"} style={{float:"right", marginRight:"20px", paddingTop:"10px"}}></FaShareAlt>
         <p style={{float:"right", marginRight:"20px", paddingTop:"10px"}}><IoEyeOutline></IoEyeOutline>1.4k Views</p>

    </div>
  </Card.Body>
</Card>
     </Row>
     <Row>
     <Card style={{ width: '100%', marginTop:"20px",paddingLeft:"0px", paddingRight:"0px",paddingTop:"0px"}}>
  <Card.Img variant="top" src="2nd.png" style={{margin:"0px"}}/>
  <Card.Body>
  <img src="education.png" style={{paddingBottom:"10px"}}></img>
     <Row>    
    <Col xs={10} >
    <Card.Title>Tax Benefits for Investment under National Pension Scheme launched by Government</Card.Title>
    </Col>
    <Col xs={2}>
        <BiDotsHorizontalRounded size={"32px"}></BiDotsHorizontalRounded>
    </Col>
    </Row>
    
    <Card.Text >
    <div className="text">I’ve worked in UX for the better part of a decade. The role of a UXer is evolving and what it means for those who want to pursue a career in UX now.</div>
      
    </Card.Text>
    <div >
         <img src="sarahwest.png" style={{float:"left"}}></img>
         <p style={{paddingLeft:"10px", paddingTop:"10px",float:"left",fontWeight:"bold"}}>Sarah West</p>
         <FaShareAlt size={"30px"} style={{float:"right", marginRight:"20px", paddingTop:"10px"}}></FaShareAlt>
         <p style={{float:"right", marginRight:"20px", paddingTop:"10px"}}><IoEyeOutline></IoEyeOutline>1.4k Views</p>

    </div>
  </Card.Body>
</Card>
     </Row>
     <Row>
     <Card style={{ width: '100%', marginTop:"20px",paddingLeft:"0px", paddingRight:"0px",paddingTop:"0px"}}>
  <Card.Img variant="top" src="3rd.png" style={{margin:"0px"}}/>
  
  <Card.Body>
  <img src="meetup.png" style={{paddingBottom:"10px"}}></img>
     <Row>    
    <Col xs={10} >
    <Card.Title>Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
    </Col>
    <Col xs={2}>
        <BiDotsHorizontalRounded size={"32px"}></BiDotsHorizontalRounded>
    </Col>
    </Row>
    <Card.Text >
    {/* <div className="text">I’ve worked in UX for the better part of a decade. The role of a UXer is evolving and what it means for those who want to pursue a career in UX now.</div> */}
      <div style={{float:"left",marginTop:"10px"}}><p style={{fontWeight:"bold"}}><BiCalendarEvent style={{marginBottom:"3px"}}></BiCalendarEvent>Fri, 12 Oct, 2018</p></div>
      <div style={{float:"left",paddingLeft:"20px",marginTop:"10px"}}><p style={{fontWeight:"bold"}}><GoLocation style={{marginBottom:"3px"}}></GoLocation>Ahmedabad</p></div>
    </Card.Text>
    <div style={{marginTop:"60px"}} className="d-grid gap-2">
    <Button variant="light" size="md" style={{color:"red",borderColor:"#A9AEB8"}}>
    Visit Website
  </Button>
    </div>
    <div style={{marginTop:"20px"}}>
         <img src="ronaljames.png" style={{float:"left"}}></img>
         <p style={{paddingLeft:"10px", paddingTop:"10px",float:"left",fontWeight:"bold"}}>Ronal James</p>
         <FaShareAlt size={"30px"} style={{float:"right", marginRight:"20px", paddingTop:"10px"}}></FaShareAlt>
         <p style={{float:"right", marginRight:"20px", paddingTop:"10px"}}><IoEyeOutline></IoEyeOutline>1.4k Views</p>

    </div>
  </Card.Body>
</Card>
     </Row>
     <Row>
     <Card style={{ width: '100%', marginTop:"20px",paddingLeft:"0px", paddingRight:"0px",paddingTop:"0px"}}>
  
  <Card.Body>
  <img src="job.png" style={{paddingBottom:"10px"}}></img>
     <Row>    
    <Col xs={10} >
    <Card.Title style={{marginTop:"10px"}}>Software Developer</Card.Title>
    </Col>
    <Col xs={2}>
        <BiDotsHorizontalRounded size={"32px"}></BiDotsHorizontalRounded>
    </Col>
    </Row>
    <Card.Text >
    {/* <div className="text">I’ve worked in UX for the better part of a decade. The role of a UXer is evolving and what it means for those who want to pursue a career in UX now.</div> */}
      <div style={{float:"left",marginTop:"10px"}}><p style={{fontWeight:"bold"}}><IoBriefcaseOutline style={{marginBottom:"3px"}}></IoBriefcaseOutline>Innovaccer Analytics Private Ltd.</p></div>
      <div style={{float:"left",paddingLeft:"20px",marginTop:"10px"}}><p style={{fontWeight:"bold"}}><GoLocation style={{marginBottom:"3px"}}></GoLocation>Noida, India</p></div>
    </Card.Text>
    <div style={{marginTop:"60px"}} className="d-grid gap-2">
    <Button variant="light" size="md" style={{color:"green",borderColor:"#A9AEB8"}}>
    Apply On Timesjobs
  </Button>
    </div>
    <div style={{marginTop:"20px"}}>
         <img src="josephgray.png" style={{float:"left"}}></img>
         <p style={{paddingLeft:"10px", paddingTop:"10px",float:"left",fontWeight:"bold"}}>Joseph Gray</p>
         <FaShareAlt size={"30px"} style={{float:"right", marginRight:"20px", paddingTop:"10px"}}></FaShareAlt>
         <p style={{float:"right", marginRight:"20px", paddingTop:"10px"}}><IoEyeOutline></IoEyeOutline>1.4k Views</p>

    </div>
  </Card.Body>
</Card>
     </Row>
    </Col>
    <Col  lg={3} className="d-none d-lg-block">
        <Row>
        <Col>
       <Button style={{float:"right", margin:"5px"}}><MdPersonAdd style={{color:"white",marginRight:"5px",marginBottom:"3px"}}></MdPersonAdd>Join Group</Button>
        <button style={{float:"right",margin:"5px",padding:"5px"}}>Write a Post<MdArrowDropDown></MdArrowDropDown></button>
        </Col>
        </Row>
        <Row style={{marginTop:"20px"}}>
            <Col className="d-none d-lg-block">
            <Col>
                <div class="form-group" style={{float:"right"}}>
                <div class="input-group input-group-lg">
                <div class="input-group-prepend">
                    <span class="input-group-text" style={{backgroundColor:"white", border :"none"}}><GoLocation></GoLocation></span>
                </div>
                {/* <input type="text" class="form-control" placeholder="Username"> */}
                <input style={{borderTop:"none",borderRight:"none",borderLeft:"none",float:"right", margin:"5px",width:"140px"}} type="text" placeholder="Noida, India"></input>
                <div class="input-group-append">
                    <span class="input-group-text" style={{backgroundColor:"white", border :"none"}}><MdEdit></MdEdit></span>
                </div>
                </div>
            </div>
           </Col>
           </Col>
        </Row>
        <Row style={{marginTop:"30px"}}>
            <Col md={0} lg={6}></Col>
            <Col md={12} lg={6}>
            <p style={{fontFamily: "IBM Plex Sans",fontStyle: "normal",fontWeight:"normal",fontSize: "12px",lineHeight: "16px",color: "#000000",opacity: "0.5"}}><MdError></MdError>Your location will help us server better and extend a personalized experience</p>
            </Col>
        </Row>

    </Col>
    <Col lg={1} className="d-none d-lg-block">
    </Col>
    </Row>
    </div>
        </div>
    );
}