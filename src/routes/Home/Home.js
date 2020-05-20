import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import Footer from 'components/Footer'
import NextLives from 'components/NextLives'
import Banner from 'components/Banner'

const Home = () => {
  return (
    <>
      <Container>
        <HomeStyled>
          <Banner />
          <NextLives maxChildren='6' />
        </HomeStyled>
        <Footer />
      </Container>
    </>
  )
}

const HomeStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Home
