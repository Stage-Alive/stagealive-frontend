import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useUser } from 'context/user-context'
import { subscribeToMessage, messageToServer, joinChat, leaveChat } from 'services/websocket'

const Chat = ({ chats }) => {
  const [text, setText] = useState('')
  const [messages, setMessage] = useState([])
  const [chat, setChat] = useState(0)
  const { user } = useUser()

  useEffect(() => {
    if (chats.length > 0) {
      joinChat(chats[0].id)
      setChat(chats[0].id)
    }
  }, [chats])

  useEffect(() => {
    subscribeToMessage(newMessage => {
      setMessage(messages.concat(newMessage))
    })
  }, [messages])

  function changeChat(newChat, selectedChat) {
    leaveChat(chat)
    joinChat(newChat)
    setChat(selectedChat)
  }

  return (
    <ChatStyled>
      <ChatHeader>
        <ChatTitle>Canais de chat</ChatTitle>
        <ChatChannel>
          <AddChannelButton>+</AddChannelButton>
          <AddChannelLabel>CANAIS</AddChannelLabel>
        </ChatChannel>
      </ChatHeader>
      <ChatNav>
        {chats.map((mapChat, index) => {
          const selected = chat === index

          return (
            <ChatTab key={index} selected={selected} onClick={() => changeChat(mapChat.id, index)}>
              <p>{mapChat.group.name}</p>
              <CloseButton>x</CloseButton>
            </ChatTab>
          )
        })}
      </ChatNav>
      <ChatBox>
        <ChatBoxHeader>
          <ChannelTitle>Bem vindo ao canal Amigos</ChannelTitle>
          <Link>link.reduzido/aqiweuiwu</Link>
        </ChatBoxHeader>
        <ChatBoxContent>
          <ChatView>
            <div id='messages'>
              <ul>
                {messages.length > 0 &&
                  messages.map((message, index) => {
                    return (
                      <Message key={index}>
                        <MessageName>{message.name}</MessageName>
                        <MessageText>{message.text}</MessageText>
                      </Message>
                    )
                  })}
              </ul>
            </div>
          </ChatView>
          <ChatInput>
            <Input
              value={text}
              onChange={content => setText(content.target.value)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  messageToServer({ name: user.name, text, chat, userId: user.id })
                  setText('')
                }
              }}
            />
            <SendButton
              onClick={() => {
                console.log(user.name, text, chat, user.id)
                messageToServer({ name: user.name, text, chat, userId: user.id })
                setText('')
              }}
            >
              <Icon src='/send-icon.svg'></Icon>
            </SendButton>
          </ChatInput>
        </ChatBoxContent>
      </ChatBox>
    </ChatStyled>
  )
}

const ChatStyled = styled.div`
  background-color: #020916;
  width: 100px;
  height: 100px;
  flex: 1;
`

const Icon = styled.img`
  padding: 5px 10px 5px 10px;
`

const Message = styled.li`
  display: flex;
  flex-direction: column;
`

const MessageName = styled.p`
  font-weight: 600;
`
const MessageText = styled.p`
  font-size: 14px;
  color: #bbbbbb;
`

const ChatInput = styled.div`
  display: flex;
  padding: 10px;
`
const ChatView = styled.div`
  padding: 10px;
  height: 200px;
  width: 100%;
  color: white;
  overflow: scroll;
  overflow-y: auto;

  overflow-x: hidden;
`
const Input = styled.input`
  color: white;
  background-color: #151f2e;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
`
const SendButton = styled.button`
  border-radius: 6px;
  background-color: #aa528d;
  margin-left: 5px;
`
const ChatBoxContent = styled.div`
  display: flex;
  flex-direction: column;
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

export default Chat
