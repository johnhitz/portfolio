import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: rgb(181,183,185);
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: rgb(250, 250,250);

    &:hover {
      color: rgb(234, 234, 235);
    }
  }
`;

export const NavigationBar = () => {
  return(
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">John Hitz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/portfolio">portfolio</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/contact">Contact Me</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}
