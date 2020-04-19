import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import linkedin from '../assets/linkedIn-logo.webp'
import github from '../assets/github.jpeg'


const LinkeIn = styled.div`
  height: 2em;
  width: 2em;
  background: url(${linkedin}) no-repeat;
  background-size: contain;
`
const Github = styled.div`
  height: 2em;
  width: 2em;
  background: url(${github}) no-repeat;
  background-size: cover;
`

const Social = styled.div`
  width: 5em;
  display: flex;
  justify-content: space-between;
`


const Styles = styled.div`
  .navbar {
    background-color: rgb(181, 183, 185);
  }

    &:hover {
      color: rgb(234, 234, 235);
    }
  }

  .navbar-nav .nav-link {
    color: rgb(51, 50, 60);

    &:hover {
      color: rgb(234, 234, 235);
    }
  }
`;

export const Footer = () => {
  return(
      <Styles>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-nav">
            <Nav className="mr-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/portfolio">portfolio</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/contact">Contact Me</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Social >
            <a href="https://www.linkedin.com/in/johnhitz/"><LinkeIn /></a>
            <a href="https://github.com/johnhitz"><Github /></a>
          </Social>
        </Navbar>

      </Styles>

  )
}
