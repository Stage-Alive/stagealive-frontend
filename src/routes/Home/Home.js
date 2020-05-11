import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Footer from 'components/Footer'
import NextLives from 'components/NextLives'

const Home = () => {
  return (
    <>
      <Container>
        <HomeStyled>
          <NextLives maxChildren='6' />
        </HomeStyled>
        <Footer />
      </Container>
    </>
  )
}

const HomeStyled = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

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
