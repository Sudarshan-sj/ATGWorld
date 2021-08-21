import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import App from "../App";
import SearchIcon from "@material-ui/icons/Search";

export const NavbarTop=()=>{
    return (
        <Navbar className="nave" collapseOnSelect expand="lg" bg="light" style={{height:"72px"}}>
            <Container classname="container" >
                <Navbar.Brand href="#home" style={{paddingLeft:"72px"}}><img width="162.57px" height="24px" src="atglogo.png"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    <div className='search'>
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

                    <Nav class="p">
                    <NavDropdown title="Create An Account, Its Free" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}