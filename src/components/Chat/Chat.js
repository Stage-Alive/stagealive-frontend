import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {
  leaveGroup as leaveGroupRequest,
  enterGroup as enterGroupRequest,
  createGroup as createGroupRequest
} from 'services/groups'
import Modal from 'components/Modal'
import { useUser } from 'context/user-context'
import io from 'socket.io-client'
const socket = io(process.env.REACT_APP_API_URL)

const Chat = ({ chats, live }) => {
  const [liveChats, setLiveChats] = useState(chats)
  const [text, setText] = useState('')
  const [messages, setMessage] = useState([])
  const [chat, setChat] = useState({
    chatId: '0',
    groupId: '0'
  })
  const [modalState, setModalState] = useState(false)
  const { user } = useUser()
  const myRef = useRef(null)

  useEffect(() => {
    if (chats.length > 0) {
      setLiveChats(chats)
      joinChat(chats[0].id)
      setChat({
        chatId: chats[0].id,
        groupId: chats[0].groupId
      })
    }
  }, [chats])

  useEffect(() => {
    const handleNewMessage = newMessage => setMessage([...messages, newMessage])
    socket.on('msgToClient', handleNewMessage)
    if (myRef.current) {
      console.log(myRef.current)
      let node = ReactDOM.findDOMNode(myRef.current)
      console.log(node)
      node.scrollIntoView({ block: 'end', behavior: 'auto' })
    }
    return () => socket.off('msgToClient', handleNewMessage)
  }, [messages])

  const handleFormSubmit = () => {
    if (text.trim()) {
      socket.emit('msgToServer', {
        name: user.name,
        text,
        chat: chat.chatId,
        userId: user.id
      })
      setText('')
    }
  }

  function joinChat(chat) {
    socket.emit('join', chat)
  }

  function leaveChat(chat) {
    socket.emit('leave', chat)
  }

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
    await createGroupRequest({
      name,
      liveId: live
    })
    window.location.reload()
  }

  async function enterGroup(group) {
    await enterGroupRequest(group)
  }

  async function leaveGroup(event) {
    const newChats = liveChats.filter(chat => {
      return chat.groupId !== event.target.value.toString()
    })
    setLiveChats(newChats)
    await leaveGroupRequest(event.target.value)
  }

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
        {liveChats.map((mapChat, index) => {
          const selected = chat.chatId === mapChat.id

          return (
            <ChatTab key={index} selected={selected} onClick={() => changeChat(mapChat.id, mapChat.groupId, index)}>
              <ChatName>{mapChat.group.name}</ChatName>
              <CloseButton value={mapChat.groupId} onClick={value => leaveGroup(value)}>
                x
              </CloseButton>
            </ChatTab>
          )
        })}
      </ChatNav>
      <ChatBox>
        <ChatBoxHeader>
          <ChannelTitle>Bem vindo ao canal Amigos</ChannelTitle>
          <Link>{chat.groupId && 'AASFC8'}</Link>
        </ChatBoxHeader>
        <ChatBoxContent>
          <ChatView>
            <div>
              <ul id='messages'>
                {messages.length > 0 &&
                  messages.map((message, index) => {
                    return (
                      <Message ref={myRef} key={index}>
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
                  handleFormSubmit()
                }
              }}
            />
            <SendButton onClick={handleFormSubmit}>
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

const ChatName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
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
// TODO: revmove magic numbers
const ChatBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(80vh - 168px);
  @media (max-width: 768px) {
    height: 46vh;
  }
`

const ChatBoxHeader = styled.div`
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
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
  padding: 0 8px;
  font-size: 20px;
  font-weight: 600;
`
const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
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
  width: 100%;
  max-width: 100%;
  cursor: pointer;
`

const ChatTab = styled.div`
  background-color: ${props => (props.selected ? '#1b2433' : '#111722')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 14px;
  max-height: 50px;
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
