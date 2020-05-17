export const createArtist = async data => {
  const res = await client.post('/artists', data)

  console.log(res)
}
