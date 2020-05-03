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
