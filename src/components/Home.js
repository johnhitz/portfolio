import React from 'react'
import styled from 'styled-components'
import './Home.css'
import { Jumbotron } from './Jumbotron'




const Button = styled.button`
  background:
`

export default class extends React.Component {
  render() {
    return(
      <div className="container">
        <div>
          <Jumbotron />
          {/*}<div className="intro">
            <p> Hey, I'm a builder currently looking for a project.</p>
          </div>*/}
        </div>
        <div className="about-me">
          <div className="about-me-img col-5">
          <img className="img " src="../assets/metric.png" alt="Headshot" />
          </div>
          <div className="blurb col-5">
            <h3>About Me</h3>
            <hr />
            <p>
              I am a dedicated and conscientious full stack developer with well developed analytical skills and a high level of motivation. I excel at assessing problems and recognizing solutions, as well as planning, implementing, and evaluating outcomes. My communication skills allow me to understand client requirements clearly and communicate their needs as features to all steakholders.
            </p>
            <a className="btn btn-outline-dark" href="/portfolio">GO TO PORTFOLIO</a>
            <hr />
          </div>
        </div>
          <div className="contact-me">
            <div className="col-4">
              <h1>
                Interested in doing <br/>
                a project together?
              </h1>
            </div>
            <div className="col-6 hr">
              <hr/>
            </div>
            <div className="col-2">
              <a className="btn btn-outline-dark" href="/contact">CONTACT ME</a>
            </div>
          </div>
      </div>
    )
  }
}
