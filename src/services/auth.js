import client from 'providers/fetchClient'

export const getUser = () => client.get('/auth/me')

export const login = data => client.post('/auth', data)

export const register = data => client.post('/users', data)

export const updateUser = (data, id) => client.patch(`users/${id}`, data)

export const facebookLogin = data => client.post('/auth/facebook', data)

export const resetPassword = data => client.post('/auth/reset-password', data)
