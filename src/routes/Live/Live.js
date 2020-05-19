import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import Container from 'components/Container'
import NextLives from 'components/NextLives'
import Chat from 'components/Chat'
import Video from 'components/Live'

import { getLive } from 'services/lives'

const Live = () => {
  const { id } = useParams()

  const [liveLink, setLiveLink] = useState('https://www.youtube.com/embed/F68KkgwP5F8')
  const [liveName, setLiveName] = useState('v-live')
  const [liveId, setLiveId] = useState('')
  const [chats, setChats] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getLive(id)
      if (res.link) {
        setLiveLink(res.link)
        setLiveName(res.name)
        setLiveId(res.id)
      }
      if (res.chats.length > 0) {
        setChats(res.chats)
      }
    }
    fetchData()
  }, [id])

  return (
    <>
      <Container>
        <LivePage>
          <FirstSection>
            <Video url={liveLink} title={liveName} />
            <Chat chats={chats} live={liveId} />
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
  flex-direction: row;
  height: 80vh;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`

const LivePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export default Live
