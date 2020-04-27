import axios from 'axios'

export const __API__ = process.env.REACT_APP_API_URL

const defaultOptions = {
  baseURL: __API__
}

const instance = axios.create(defaultOptions)

export const getPublicGroups = async () => {
  const res = await instance.get('/publicgroups')

  const groups = res.data.data.items.map(group => {
    return {
      id: group.id,
      regionId: group.regionId,
      groupId: group.group.id,
      groupName: group.group.name
    }
  })
  return groups
}

export default instance
