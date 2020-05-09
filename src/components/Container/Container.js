import React from 'react'
import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Section from 'components/Section'

const ContainerComponent = ({ children, ...props }) => (
  <Container {...props}>
    <Header />
    <Section>{children}</Section>
    <Footer />
  </Container>
)

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  background-color: #020916;
`

export default ContainerComponent
