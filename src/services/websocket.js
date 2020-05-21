import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_API_URL)
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

function joinChat(chat) {
  socket.emit('join', chat)
}

function leaveChat(chat) {
  socket.emit('leave', chat)
}

// function subscribeToMessage(cb) {
//   socket.on('msgToClient', message => cb(message))
// }

function messageToServer({ name, text, chat, userId }) {
  socket.emit('msgToServer', {
    name,
    text,
    chat,
    userId
  })
}

export { messageToServer, joinChat, leaveChat, socket }
