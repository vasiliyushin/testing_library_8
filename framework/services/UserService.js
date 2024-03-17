import client from './client'

const getUser = async ({ userId, token }) => {
  const response = await client.get(`/Account/v1/User/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data,
  }
}

const createUser = async ({ userName, password }) => {
  const response = await client.post(`/Account/v1/User`, {
    userName,
    password,
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data,
  }
}

const removeUser = async ({ userId, token }) => {
  const response = await client.delete(`/Account/v1/User/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    headers: response.headers,
    status: response.status,
    data: response.data,
  }
}

export default {
  get: getUser,
  create: createUser,
  remove: removeUser,
}
