import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_API_URL)

function joinChat(chat) {
  socket.emit('join', chat)
}

function leaveChat(chat) {
  socket.emit('leave', chat)
}

function subscribeToMessage(cb) {
  socket.on('msgToClient', message => cb(message))
  socket.emit('subscribeToMessage', 1000)
}

function messageToServer({ name, text, chat, userId }) {
  socket.emit('msgToServer', {
    name,
    text,
    chat,
    userId
  })
}

export { subscribeToMessage, messageToServer, joinChat, leaveChat }
