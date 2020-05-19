import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Modal from 'components/Modal'
import { useUser } from 'context/user-context'
import { subscribeToMessage, messageToServer, joinChat, leaveChat } from 'services/websocket'

const Chat = ({ chats, live }) => {
  const [text, setText] = useState('')
  const [messages, setMessage] = useState([])
  const [chat, setChat] = useState({
    chatId: '0',
    groupId: '0'
  })
  const [modalState, setModalState] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    if (chats.length > 0) {
      joinChat(chats[0].id)
      setChat({
        chatId: chats[0].id,
        groupId: chats[0].groupId
      })
    }
  }, [chats])

  useEffect(() => {
    subscribeToMessage(newMessage => {
      setMessage(messages.concat(newMessage))
    })
  }, [messages])

  function showModal() {
    setModalState(true)
  }

  function hideModal() {
    setModalState(false)
  }

  function changeChat(newChat, groupId, selectedChat) {
    leaveChat(chat.chatId)
    joinChat(newChat)
    setChat({
      chatId: newChat,
      groupId: groupId
    })
  }

  async function createGroup(name) {
    const res = await createGroup(name, live)
    console.log(res)
  }

  async function enterGroup(group) {
    const res = await enterGroup(group)
    console.log(res)
  }

  async function leaveGroup(group) {}

  return (
    <ChatStyled>
      {modalState && (
        <Modal show={modalState} handleClose={hideModal} createGroup={createGroup} enterGroup={enterGroup} />
      )}
      <ChatHeader>
        <ChatTitle>Canais de chat</ChatTitle>
        <ChatChannel onClick={showModal}>
          <AddChannelButton>+</AddChannelButton>
          <AddChannelLabel>CANAIS</AddChannelLabel>
        </ChatChannel>
      </ChatHeader>
      <ChatNav>
        {chats.map((mapChat, index) => {
          const selected = chat.chatId === index

          return (
            <ChatTab key={index} selected={selected} onClick={() => changeChat(mapChat.id, mapChat.groupId, index)}>
              <p>{mapChat.group.name}</p>
              <CloseButton>x</CloseButton>
            </ChatTab>
          )
        })}
      </ChatNav>
      <ChatBox>
        <ChatBoxHeader>
          <ChannelTitle>Bem vindo ao canal Amigos</ChannelTitle>
          <Link>{chat.groupId && `link.reduzido/${chat.groupId}`}</Link>
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
                  messageToServer({ name: user.name, text, chat: chat.chatId, userId: user.id })
                  setText('')
                }
              }}
            />
            <SendButton
              onClick={() => {
                messageToServer({ name: user.name, text, chat: chat.chatId, userId: user.id })
                setText('')
              }}
            >
              <Icon src='/icons/send-icon.svg'></Icon>
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
  flex: 1;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  width: 100%;
  color: white;
  max-heigth: calc(80vh - 200px);
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
  justify-content: space-between;
  height: calc(80vh - 170px);
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
  padding: 10px 0 10px 10px;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 14px;
`

const ChatTitle = styled.h3`
  color: white;
  font-weight: 500;
  margin: 20px;
`

const ChannelTitle = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 0 0 20px;
`

const CloseButton = styled.button`
  background-color: inherit !important;
  color: white;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 800;
`

export default Chat
