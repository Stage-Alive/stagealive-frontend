import io from 'socket.io-client'

const socket = io('http://localhost:4000')

function subscribeToMessage(cb) {
  socket.on('msgToClient', message => cb(message))
  socket.emit('subscribeToMessage', 1000)
}

function messageToServer({ name, text }) {
  socket.emit('msgToServer', {
    name,
    text
  })
}

export { subscribeToMessage, messageToServer }
