import React, { useState, useEffect } from 'react'
import { subscribeToMessage, messageToServer, joinChat, leaveChat } from 'services/websocket'
import styled from 'styled-components'
import { getPublicGroups } from 'providers/fetchClient.js'

const Chat = () => {
  const [messages, setMessage] = useState([])
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [chat, setChat] = useState('0')
  const [groups, setGroups] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getPublicGroups()
      setGroups(res)
    }
    fetchData()
  }, [])

  useEffect(() => {
    subscribeToMessage(newMessage => {
      setMessage(messages.concat(newMessage))
    })
  }, [messages])

  function changeChat(newChat) {
    leaveChat(chat)
    joinChat(newChat)
    setChat(newChat)
  }

  return (
    <Section className='row'>
      <ChatView>
        <Title className='text-center'>Chat</Title>
        <Input
          type='text'
          value={name}
          placeholder='Enter name...'
          onChange={content => setName(content.target.value)}
        />
        <Chats>
          {groups.map(group => {
            return (
              <Button value={group.groupName} onClick={content => changeChat(content.target.value)}>
                {group.groupName}
              </Button>
            )
          })}
          <p>Current chat: {chat}</p>
        </Chats>
        <Box className='card'>
          <div id='messages'>
            <ul>
              {messages.length > 0 &&
                messages.map((message, index) => {
                  return <li key={index}>{`${message.name}:${message.text}`}</li>
                })}
            </ul>
          </div>
        </Box>
        <br />
        <Textarea
          id='textarea'
          value={text}
          placeholder='Enter message...'
          onChange={content => setText(content.target.value)}
        ></Textarea>
        <br />
        <Button id='send' className='btn' onClick={() => messageToServer({ name, text, chat })}>
          Send
        </Button>
      </ChatView>
    </Section>
  )
}

const Chats = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

const Input = styled.input`
  border: solid 0.1px #c3c3c3;
  margin-bottom: 20px;
  padding: 10px;
`

const ChatView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const Textarea = styled.textarea`
  height: 50px;
  width: 400px;
  border: solid 0.1px #c3c3c3;
`

const Button = styled.button`
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  margin-left: 10px;
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding: 20px;
`

const Title = styled.h1`
  font-family: 'Ubuntu';
  font-size: 2.5em;
  font-weight: 100;
  display: flex;
  padding-bottom: 20px;
  justify-content: center;
`

const Box = styled.div`
  height: 200px;
  width: 400px;
  overflow-y: scroll;
  border: solid 0.1px #c3c3c3;
`

export default Chat
