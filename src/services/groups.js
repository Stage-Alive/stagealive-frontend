import client from 'providers/fetchClient'

export const getPublicGroups = async () => {
  const res = await client.get('/publicgroups')
  console.log(res)
  if (res.data) {
    return res.data.items.map(group => {
      return {
        id: group.id,
        name: group.group.name
      }
    })
  }
}
