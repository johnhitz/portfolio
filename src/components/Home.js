import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
// import './Home.css'
import { Jumbotron } from './Jumbotron'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import hitz_012 from '../assets/Hitz_012.jpg'

const Button = styled.button`
  /* background:  */
`

const Headshot = styled.div`
  height: 25em;
  /* width: 15em; */
  background: url(${hitz_012});
  background-size: contain;
  background-repeat: no-repeat;
`

const Horizontal = styled.div`
  height: 1px;
  background: rgb(243, 243, 245);
`

const BottomRow = styled.div`
  margin: 2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Section = styled.div`
  margin-top: 2em;
  border-bottom: 5px solid rgb(82,86,89);
`

const Text = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  height: 20em;
  width: 90%;
  border-top: 1px solid rgb(243, 243, 245);
  border-bottom: 1px solid rgb(243, 243, 245);
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resume: false
    }
    this.showResume = this.showResume.bind(this)
    this.hideResume = this.hideResume.bind(this)
  }

  showResume() {
    this.setState({resume: true})
  }
  hideResume() {
    this.setState({resume: false})
  }
  render() {
    return(
      <Container>

        <Row className="top">
          <Col>
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Headshot />
          </Col>
          <Col>
            <Text>
              <h3>About Me</h3>
              <p>
                I am a dedicated and conscientious full stack developer with well developed analytical skills and a high level of motivation. I excel at assessing problems and recognizing solutions, as well as planning, implementing, and evaluating outcomes. My communication skills allow me to understand client requirements clearly and communicate their needs as features to all steakholders.
              </p>
              <a className="btn btn-outline-dark" href="/portfolio">GO TO PORTFOLIO</a>
              {
                this.state.resume
                ? <>
                    <Button
                      onClick={this.hideResume}
                      className="btn btn-outline-dark"
                      >
                      HIDE RESUME</Button>

                  </>
                : <Button
                    onClick={this.showResume}
                    className="btn btn-outline-dark"
                    >
                    CHECK MY RESUME</Button>
              }
            </Text>
          </Col>
        </Row>
        {
          this.state.resume
          ?
            <Row>
              <Col>
                <ResponsiveEmbed>
                  <Section>
                    <object
                      data="/resume.pdf"
                      type="application/pdf"
                      width="100"
                      height="700"
                      alt="My Resume"/>
                  </Section>
                </ResponsiveEmbed>
              </Col>
            </Row>
          : null
        }
        <BottomRow>

            <Col xs={2}>
              <h2>
                Interested in doing <br/>
                a project together?
              </h2>
            </Col>
            <Col>
              <Horizontal />
            </Col>
            <Col xs={2}>
              <a className="btn btn-outline-dark" href="/contact">CONTACT ME</a>
            </Col>

        </BottomRow>
      </Container>
    )
  }
}
