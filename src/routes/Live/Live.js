import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Section from 'components/Section'

const Home = () => {
  return (
    <>
      <Container>
        <LivePage>
          <Live>
            <iframe width='100%' height='100%' src='https://www.youtube.com/embed/yJFme_74VCc' allowfullscreen></iframe>
          </Live>
          <Chat></Chat>
        </LivePage>
      </Container>
    </>
  )
}

const LivePage = styled.div``
const Live = styled.div``
const Chat = styled.div``

export default Home
