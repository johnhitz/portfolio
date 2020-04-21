import React from 'react'
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


const Styled = styled.div`
  width: 5em;
  display: flex;
  justify-content: space-between;
`
export const SocialLinks = () => {
  return(
    <Styled >
      <a href="https://www.linkedin.com/in/johnhitz/"><LinkeIn /></a>
      <a href="https://github.com/johnhitz"><Github /></a>
    </Styled>
  )
}
