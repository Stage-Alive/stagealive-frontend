import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <p>Stage Alive</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  border-top: 1px solid #ccc;
  text-align: center;
  letter-spacing: 0.2em;
  font-family: 'Ubuntu', Calibri, Arial, Helvetica, sans-serif;
  padding: 20px;
  font-size: 0.9em;
  margin-bottom: 80px;
`

export default Footer
