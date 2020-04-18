import React from 'react'
import Container from 'react-bootstrap/Container' //Only imports Container as opposed to
//import { Container } from 'react-bootstrap' which import the whole library...

export const Layout = (props) => {
  return(
    <Container fluid >
      {props.children}
    </Container>
  )
}
