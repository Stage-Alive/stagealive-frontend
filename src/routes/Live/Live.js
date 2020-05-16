import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import Container from 'components/Container'
import NextLives from 'components/NextLives'
import Chat from 'components/Chat'

import { getLive } from 'services/lives'

const Live = () => {
  const { id } = useParams()

  const [live, setLive] = useState('https://www.youtube.com/embed/F68KkgwP5F8')
  const [chats, setChats] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getLive(id)
      if (res.link) {
        setLive(res.link)
      }
      if (res.chats.length > 0) {
        setChats(res.chats)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Container>
        <LivePage>
          <FirstSection>
            <Video>
              <iframe
                width='100%'
                height='100%'
                src={live}
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </Video>
            <Chat chats={chats} />
          </FirstSection>
          <SecondSection>
            <NextLives maxChildren='3' />
          </SecondSection>
        </LivePage>
      </Container>
    </>
  )
}

const FirstSection = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
`
const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const LivePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: center;
  align-items: center;
`
const Video = styled.div`
  background-color: #020916;
  width: 100px;
  height: 80vh;
  flex: 2;
`

export default Live
