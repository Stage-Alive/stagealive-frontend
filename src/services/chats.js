import client from 'providers/fetchClient'

export const getChats = async () => {
  const res = await client.get('/chats')

  if (res.data.data) {
    const chats = res.data.data.items.map(chat => {
      return {
        id: chat.id
      }
    })
    return chats
  }
}

export const getChat = async id => {
  const res = await client.get('/chats/' + id)
  if (res.data && res.data.messages.length > 0) {
    const messages = res.data.messages.map(message => {
      return {
        name: message.user.name,
        text: message.text
      }
    })
    return messages
  } else
    return {
      messages: []
    }
}
