import React from 'react'
import styled from 'styled-components'

const Section = ({ displayFooter = true, children }) => {
  return <SectionStyled displayFooter={displayFooter}>{children}</SectionStyled>
}

const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
  @media (max-width: 768px) {
    padding-bottom: ${props => (props.displayFooter ? '200px' : '0')};
  }
`

export default Section
