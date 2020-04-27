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
        {/* <Header /> */}
        <Section>
          <Title> Live</Title>
          <Iframe
            width='800'
            height='400'
            src='https://www.youtube.com/embed/nJGatbd22EA'
            frameborder='0'
            allowfullscreen
          />
          <Chat />
        </Section>
        <Footer />
      </Container>
    </>
  )
}

const Iframe = styled.iframe`
  display: block;
  margin: 0 auto;
`

const Title = styled.h1`
  font-family: 'Ubuntu';
  font-size: 2.5em;
  font-weight: 100;
  text-align: center;
`

export default Home
