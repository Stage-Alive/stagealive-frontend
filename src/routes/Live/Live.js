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
  const [chats, setChats] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getLive(id)
      if (res.link) {
        setLiveLink(res.link)
        setLiveName(res.name)
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

export default Live
