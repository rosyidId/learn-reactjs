import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavigationBar = ({ setValue }) => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href='/'>Home</Navbar.Brand>
                    <Nav.Link href='https://www.google.com/' target='_blank'>
                        {!setValue ? "About" :setValue}
                    </Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse></Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
};

export default NavigationBar;
