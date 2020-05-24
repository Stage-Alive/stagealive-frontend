import React, { createContext, useState, useLayoutEffect, useContext, useCallback } from 'react'
import { useAsync } from 'react-async'

import { login as authLogin, register as authRegister, facebookLogin as authFacebookLogin } from 'services/auth'
import { setToken, clearToken, bootstrapAppData } from 'helpers'

import Loader from 'components/Loader'

const AuthContext = createContext()

const AuthProvider = props => {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false)
  const { data = { user: null }, error, isRejected, isPending, isSettled, reload } = useAsync({
    promiseFn: bootstrapAppData
  })

  useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true)
    }
  }, [isSettled])

  const login = useCallback(
    async data => {
      try {
        const auth = await authLogin(data)
        setToken(auth.access_token)
        reload()

        return { auth }
      } catch (error) {
        return { error: 'Email ou senha incorretos' }
      }
    },
    [reload]
  )

  const facebookLogin = useCallback(
    async data => {
      try {
        const auth = await authFacebookLogin(data)
        setToken(auth.access_token)
        reload()

        return { auth }
      } catch (error) {
        return Promise.reject(error)
      }
    },
    [reload]
  )

  const register = useCallback(
    async data => {
      try {
        const user = await authRegister(data)
        setToken(user.data.access_token)
        console.log(user)
        reload()

        return { user }
      } catch (error) {
        return Promise.reject(error)
      }
    },
    [reload]
  )

  const logout = useCallback(() => {
    clearToken()
    reload()
  }, [reload])

  if (!firstAttemptFinished) {
    if (isPending) {
      return <Loader />
    }

    if (isRejected) {
      return (
        <div css={{ color: 'red' }}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      )
    }
  }

  return <AuthContext.Provider value={{ data, login, logout, register, facebookLogin }} {...props} />
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
