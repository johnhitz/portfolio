import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { SocialLinks }  from './SocialLinks'





export const Contact = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Submitting ${name}, ${email}, and ${message}`)
  }
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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="ContactName">
              <Form.Label id="name"></Form.Label>
              <Form.Control
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name..." />
            </Form.Group>
            <Form.Group controlId="ContactEmail">
              <Form.Label id="email"></Form.Label>
              <Form.Control
                id="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email..." />
            </Form.Group>
            <Form.Group controlId="ContactMessage">
              <Form.Label id="message"></Form.Label>
              <Form.Control
              id="message"
              as="textarea" rows="3"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Send me a message..." />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>

    </Container>
  )
}
