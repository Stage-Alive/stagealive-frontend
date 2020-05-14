import client from 'providers/fetchClient'

export const getLives = async limit => {
  const res = await client.get('/lives?limit=' + limit)

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
  console.log(res)
  return res.data
}
