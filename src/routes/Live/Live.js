import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useLocation } from 'react-router-dom'

import Container from 'components/Container'
import NextLives from 'components/NextLives'
import Chat from 'components/Chat'
import Video from 'components/Video'
import { enterGroup as enterGroupRequest } from 'services/groups'
import { getLive } from 'services/lives'

const Live = () => {
  const { id } = useParams()
  let groupId = false
  const location = useLocation()
  if (location.pathname.includes('group')) {
    const locationSplit = location.pathname.split('/')
    groupId = locationSplit[locationSplit.length - 1]
  }

  const [liveLink, setLiveLink] = useState('')
  const [liveName, setLiveName] = useState('v-live')
  const [liveId, setLiveId] = useState('')
  const [groups, setGroups] = useState([])

  useEffect(() => {
    if (groupId) {
      async function enterGroupByQuery() {
        const res = await enterGroupRequest(groupId)
      }
      enterGroupByQuery()
    }
  }, [groupId])

  useEffect(() => {
    async function fetchData() {
      const res = await getLive(id)
      if (res.link) {
        setLiveLink(res.link)
        setLiveName(res.name)
        setLiveId(res.id)
      }
      if (res.groups.length > 0) {
        setGroups(res.groups)
      }
    }
    fetchData()
  }, [id])

  return (
    <>
      <Container displayFooter={false}>
        <LivePage>
          <FirstSection>
            <Video url={liveLink} title={liveName} />
            <Chat groups={groups} live={liveId} />
          </FirstSection>
          <SecondSection>
            <NextLives maxChildren='3' />
          </SecondSection>
        </LivePage>
      </Container>
    </>
  )
}

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

const FirstSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: calc(100vh-80px);
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

export default Live
