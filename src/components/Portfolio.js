import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import whodapetLandingPage from "../assets/whodapet-landing-page.png"
import metric from '../assets/metric.png'
import cheers from '../assets/cheers.png'

const Wrapper = styled.div`
  margin: 2em 0;
`

const ImgOne = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height:20em;
  background: url(${whodapetLandingPage});
  background-size: contain;
  background-repeat: no-repeat;
`

const ImgTwo = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height: 20em;
  background: url(${metric});
  background-size: contain;
  background-repeat: no-repeat;
`

const ImgThree = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height: 20em;
  background: url(${cheers});
  background-size: contain;
  background-repeat: no-repeat;
`

const Text = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height: 20em;
  border-top: 1px solid rgb(243, 243, 245);
  border-bottom: 1px solid rgb(243, 243, 245);
`


export default function Portfolio() {
  return(
    <>
      <h1>Portfolio</h1>
      <Container>
        <Wrapper>
        <Row >
          <Col>
            <ImgOne/>
          </Col>
          <Col>
            <Text>
              <h3>Whodapet</h3>
              <p>Whodapet is a system that allows jurisdictions to communicate with veterinary clinics and pet owners in order to more effectively manage pet registrations.</p>

              <p>This is by far the biggest project I've worked on and in many ways what lead me to persue education at General Assembly. I designed the interface and data model, and I personally built the search function for Whodapet. However, it has became aparent that I neeeded more skills if I am going to make progress on the project.</p>
              <a href="http://demo.whodapet.com">Whodapet</a>
            </Text>
          </Col>
        </Row>
        </Wrapper>
        <Wrapper>
        <Row>
          <Col>
            <Text>
              <h3>Metric</h3>
              <p>Metric is an order fulfillment system for agricultural products I recently started working on. Metric is very much a work in progress...But it's gettng there!</p>
              <a href="https://metric-fullfill.herokuapp.com/">Whodapet</a>
            </Text>
          </Col>
          <Col>
            <ImgTwo/>
          </Col>
        </Row>
        </Wrapper>
        <Wrapper>
        <Row>
          <Col>
            <ImgThree/>
          </Col>
          <Col>
            <Text>
              <h3>Cheers</h3>
              <p>Cheers is an app to collect a list of beers your favorite beers. It was my pleasure to  work on Cheers with two class mates, [<a href="https://www.linkedin.com/in/evanpjames/">Evan James</a> and <a href="http://linkedin.com/in/richard-wright1876">Richard Wright</a>]. Often, due to participation and/or the skill set of team members school projects are difficult at best. But Cheers turned out to be an excelent project, and working with both Evan and Richard was a great pleasure!</p>

              If I'm not the developer you need on your team I would highly recommend either or both of them!
              <br/>
              <a href="https://cheers-frontend.herokuapp.com/">Cheers</a>
            </Text>
          </Col>
        </Row>
        </Wrapper>
      </Container>
    </>
  )
}
