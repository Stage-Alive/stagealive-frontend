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

export default Home
