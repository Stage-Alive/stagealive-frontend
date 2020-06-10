import client from 'providers/fetchClient'

export const createLive = async data => {
  await client.post('/lives', data)
}

export const getLives = async (limit, highlight = false) => {
  const url = `/lives?limit=${limit}&highlight=${highlight ? 'true' : 'false'}`
  const res = await client.get(url)

  if (res.data) {
    const lives = res.data.items.map(live => {
      return {
        id: live.id,
        name: live.name,
        startAt: live.startAt,
        secondaryBanner: live.secondaryBanner,
        mainBanner: live.mainBanner,
        link: live.link
      }
    })
    return lives
  }
}

export const getLive = async id => {
  const res = await client.get('/lives/' + id)

  return res.data
}
