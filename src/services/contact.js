import client from 'providers/fetchClient'

export const createContact = data => client.post('/contactforms', data)
