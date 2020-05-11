import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import NextLives from 'components/NextLives'

const Home = () => {
  return (
    <>
      <Container>
        <LivePage>
          <NextLives maxChildren='3' />
        </LivePage>
      </Container>
    </>
  )
}

const LivePage = styled.div`
  display: flex;
  width: 95%;
  justify-content: center;
`
const Live = styled.div``
const Chat = styled.div``

export default Home
