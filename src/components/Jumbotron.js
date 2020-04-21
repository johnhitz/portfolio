import React from 'react'
import { Jumbotron as Jumbo} from 'react-bootstrap'
import styled from 'styled-components'
import whodapetLandingPage from '../assets/whodapet-landing-page.png'

const Styles = styled.div`
  .jumbotron {
    height: 350px;
    width: 100%;
    display: flex;
    judtify-content: flex-start;
    align-items: flex-end;
    background: url(${whodapetLandingPage}) no-repeat;
    background-size: cover;
  }
`
const Intro = styled.div`
  height: 10em;
  width: 10em;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(234, 234, 235);
  padding-top: .75em;
  padding-right: .75em;
  color: rgb(32, 58, 76);
`

export const Jumbotron = () => {
  return(
    <Styles>
        <Jumbo className="jumbo">
          <Intro>
            <p> Hey, I'm a builder. Feel free to contact me if you need help on a project.</p>
          </Intro>
        </Jumbo>
    </Styles>
  )
}
