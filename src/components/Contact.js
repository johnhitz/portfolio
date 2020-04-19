import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialLinks }  from './SocialLinks'



export const Contact = () => {
  return(
    <Container>
      <Row>
        <Col xs={5}><h1>Get in Touch</h1></Col>
        <Col>
          <p>I can't wait to hear about your project and or team. I'm currently looking for a position where my skills can contribute to the success of a team and look forward to hearing from you.</p>
          <SocialLinks />
        </Col>
      </Row><Row>
        <Col xs={5}><h1>Get in Touch</h1></Col>
        <Col>
          <p>I can't wait to hear about your project and or team. I'm currently looking for a position where my skills can contribute to the success of a team and look forward to hearing from you.</p>
          <SocialLinks />
        </Col>
      </Row>

    </Container>
  )
}
