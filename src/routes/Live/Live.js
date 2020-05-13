import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import NextLives from 'components/NextLives'

const Live = () => {
  return (
    <>
      <Container>
        <LivePage>
          <FirstSection>
            <Video>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/QxamVP2dJCA'
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </Video>
            <Chat>
              <ChatHeader>
                <ChatTitle>Canais de chat</ChatTitle>
                <ChatChannel>
                  <AddChannelButton>+</AddChannelButton>
                  <AddChannelLabel>CANAIS</AddChannelLabel>
                </ChatChannel>
              </ChatHeader>
              <ChatNav>
                <ChatTab>
                  <p>Live</p>
                  <CloseButton>x</CloseButton>
                </ChatTab>
                <ChatTab selected>
                  <p>Amigos</p>
                  <CloseButton>x</CloseButton>
                </ChatTab>
                <ChatTab>
                  <p>Alagoas</p>
                  <CloseButton>x</CloseButton>
                </ChatTab>
              </ChatNav>
              <ChatBox>
                <ChatBoxHeader>
                  <ChannelTitle>Bem vindo ao canal Amigos</ChannelTitle>
                  <Link>link.reduzido/aqiweuiwu</Link>
                </ChatBoxHeader>
                <ChatBoxContent>
                  <ChatView></ChatView>
                  <ChatInput>
                    {/* <Input></Input> */}
                    <SendButton></SendButton>
                  </ChatInput>
                </ChatBoxContent>
              </ChatBox>
            </Chat>
          </FirstSection>
          <SecondSection>
            <NextLives maxChildren='3' />
          </SecondSection>
        </LivePage>
      </Container>
    </>
  )
}

const ChatInput = styled.div``
const ChatView = styled.div``
const Input = styled.input``
const SendButton = styled.button``
const ChatBoxContent = styled.div`
  display: flex;
`

const ChatBoxHeader = styled.div`
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`

const Link = styled.a`
  color: #aa528d;
  font-size: 15px;
  text-decoration: underline;
  margin-left: 20px;
`

const AddChannelLabel = styled.p`
  color: white;
  font-size: 10px;
  font-weight: 600;
`

const AddChannelButton = styled.button`
  display: flex;
  justify-content: center;
  color: white;
  border: 2px solid #ffffff;
  border-radius: 10px;
  align-items: center;
  background-color: inherit;
  padding: 2px 8px 2px 8px;
  font-size: 20px;
  font-weight: 600;
`
const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChatChannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ChatBox = styled.div`
  background-color: #1b2433;
`
const ChatNav = styled.nav`
  display: flex;
  color: white;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`

const ChatTab = styled.div`
  background-color: ${props => (props.selected ? '#1b2433' : '#111722')};
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const ChatTitle = styled.h3`
  color: white;
  font-weight: 500;
  margin: 20px;
`

const ChannelTitle = styled.h3`
  color: white;
  font-weight: 500;
  padding: 20px 0 0 20px;
`

const CloseButton = styled.button`
  background-color: inherit !important;
  color: white;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 800;
`

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
const Chat = styled.div`
  background-color: #020916;
  width: 100px;
  height: 100px;
  flex: 1;
`

export default Live
