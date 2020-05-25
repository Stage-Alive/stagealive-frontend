import client from 'providers/fetchClient'

export const createArtist = async data => {
  await client.post('/artists', data)
}

export const getArtists = async () => {
  const res = await client.get('/artists')

  return res.data.items
}
