import React from 'react'
import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Section from 'components/Section'
import MobileHeader from 'components/MobileHeader'
import useWindowDimensions from 'hooks/window-dimensions'

const ContainerComponent = ({ children, ...props }) => {
  const { width } = useWindowDimensions()

  return (
    <Container {...props}>
      {width < 756 ? <MobileHeader /> : <Header />}
      <Section>{children}</Section>
      <Footer />
    </Container>
  )
}

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
