import client from 'providers/fetchClient'

export const getPublicGroups = async () => {
  const res = await client.get('/publicgroups')
  if (res.data) {
    return res.data.items.map(group => {
      console.log(group)
      return {
        id: group.group.id,
        name: group.group.name
      }
    })
  }
}

export const createGroup = async data => {
  return client.post('/privategroups', data)
}

export const enterGroup = async groupId => {
  return client.post('/groups/' + groupId + '/subscribe')
}

export const leaveGroup = async groupId => {
  return client.delete('/groups/' + groupId + '/unsubscribe')
}
