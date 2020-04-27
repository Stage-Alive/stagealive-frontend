import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Chat from 'components/Chat'
import Section from 'components/Section'

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Section>
          <Title> Stage Live</Title>
          <Chat />
        </Section>
        <Footer />
      </Container>
    </>
  )
}

const Title = styled.h1`
  font-family: 'Ubuntu';
  font-size: 2.5em;
  font-weight: 100;
`

export default Home
