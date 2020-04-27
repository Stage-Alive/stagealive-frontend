import React, { useState, useEffect } from 'react'
import { subscribeToMessage, messageToServer } from 'services/websocket'

const Chat = () => {
  const [messages, setMessage] = useState([])
  const [text, setText] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    subscribeToMessage(newMessage => {
      setMessage(messages.concat(newMessage))
    })
  }, [messages])

  return (
    <div className='App'>
      <div className='row'>
        <div>
          <h1 className='text-center'>Chat</h1>
          <div id='status'></div>
          <div id='chat'>
            <input
              type='text'
              value={name}
              placeholder='Enter name...'
              onChange={content => setName(content.target.value)}
            />
            <div className='card'>
              <div id='messages'>
                <ul>
                  {messages.length > 0 &&
                    messages.map(message => {
                      return <li>{`${message.name}:${message.text}`}</li>
                    })}
                </ul>
              </div>
            </div>
            <br />
            <textarea
              id='textarea'
              value={text}
              placeholder='Enter message...'
              onChange={content => setText(content.target.value)}
            ></textarea>
            <br />
            <button id='send' className='btn' onClick={() => messageToServer({ name, text })}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
