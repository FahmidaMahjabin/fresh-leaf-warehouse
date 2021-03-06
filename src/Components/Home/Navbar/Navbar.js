import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../init';
const getSignOut = () =>{
    signOut(auth);
    console.log("logged out")
}
const GetNavbar = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand to="#home">Green Leaf Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>


                    </Nav>
                    <Nav>
                        {user ?
                            <div className='d-flex'>
                                <Nav.Link as={Link} to="/manageInventory">Manage Inventory</Nav.Link>
                                <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                                <buttton type = "button" onClick = {getSignOut}  className = "btn btn-link">Log Out</buttton>
                            </div>
                            :
                            <Nav.Link as={Link} to="/logIn">Log In</Nav.Link>

                        }

                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default GetNavbar;