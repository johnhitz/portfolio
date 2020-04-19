import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import whodapetLandingPage from "../assets/whodapet-landing-page.png"
import metric from '../assets/metric.png'
import cheers from '../assets/cheers.png'

const Img = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
`

const ImgOne = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height: 90%;
  background: url(${whodapetLandingPage}) no-repeat;
  background-size: cover;
`

const ImgTwo = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height: 90%;
  background: url(${metric}) no-repeat;
  background-size: cover;
`

const ImgThree = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height: 90%;
  background: url(${cheers}) no-repeat;
`

const Text = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  border-top: 1px solid rgb(243, 243, 245);
  border-bottom: 1px solid rgb(243, 243, 245);
`


export default function Portfolio() {
  return(
    <>
      <h1>Portfolio</h1>
      <Container>

        <Row >
          <Col>
            <ImgOne/>
          </Col>
          <Col>
            <Text>
              <h3>Whodapet</h3>
              <p>Whodapet is a system that allows jurisdictions to communicate with veterinary clinics and pet owners in order to more effectively manage pet registrations.</p>
              <a href="http://demo.whodapet.com">Whodapet</a>
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>
              <h3>Metric</h3>
              <p>Metric is an order fulfillment system for agricultural products I recently started working on. Very much a work in progress...But it's gettng there!</p>
              <a href="https://metric-fullfill.herokuapp.com/">Whodapet</a>
            </Text>
          </Col>
          <Col>
            <ImgTwo/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgThree/>
          </Col>
          <Col>
            <Text>
              <h3>Cheers</h3>
              <p>Cheers is a app to collect a personal list of beers. I worked on Cheers with two class mates [<a href="https://www.linkedin.com/in/evanpjames/">Evan James</a> and Richard Wright] as a school project.</p>
              <a href="https://cheers-frontend.herokuapp.com/">Cheers</a>
            </Text>
          </Col>
        </Row>
      </Container>
    </>
  )
}
