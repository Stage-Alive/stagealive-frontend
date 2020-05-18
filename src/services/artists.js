import client from 'providers/fetchClient'

export const createArtist = async data => {
  await client.post('/artists', data)
}
