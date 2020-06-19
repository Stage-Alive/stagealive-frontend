import client from 'providers/fetchClient'

export const createLive = async data => {
  await client.post('/lives', data)
}

export const getLives = async (limit, highlighted = false) => {
  const url = `/lives?${highlighted ? 'highlighted=1' : ''}`
  const res = await client.get(url)

  if (res.data) {
    const lives = res.data.items.map(live => {
      return {
        id: live.id,
        name: live.name,
        startAt: live.startAt,
        mainBanner: live.mainBanner,
        link: live.link,
        description: live.description
      }
    })
    return lives
  }
}

export const getLive = async id => {
  const res = await client.get('/lives/' + id)

  return res.data
}
