import client from 'providers/fetchClient'

export const getUser = () => client.get('/auth/me')

export const login = data => client.post('/auth/login', data)

export const register = data => client.post('/users', data)