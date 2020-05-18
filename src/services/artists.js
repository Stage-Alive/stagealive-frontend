import client from 'providers/fetchClient'

export const createArtist = async data => {
  await client.post('/artists', data)
}

export const getArtists = async () => {
  const res = await client.get('/artists')

  console.log(res.data)

  return res.data.items
}
