import React from 'react'
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import whodapetLandingPage from '../assets/whodapet-landing-page.png'

const Styles = styled.div`
  .jumbotron {
    height: 350px;
    width: 95%;
    display: flex;
    judtify-content: flex-start;
    align-items: flex-end;
    background: url(${whodapetLandingPage}) no-repeat;
    background-size: cover;
  }
`
const Div = styled.div`
  display: flex;
  align-items: flex-end;
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
const Img = styled.img`
  /* height: 700px;
  margin: 100px; */
`
// <Img className="jumbo-img" src="../assets/whodapet-landing-page.png" alt="Metric Project screenshot" />


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
