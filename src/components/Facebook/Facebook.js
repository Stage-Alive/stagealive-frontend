import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { useAuth } from 'context/auth-context'

function Facebook() {
  const { facebookLogin } = useAuth()

  // TO DO: Remove email and password from json, they shouldn't be sent.

  const responseFacebook = async response => {
    await facebookLogin({
      email: 'teste@gmail.com',
      password: 'teste123',
      profile: {
        displayName: response.name,
        email: response.email,
        id: response.id
      },
      access_token: response.access_token
    })
  }

  const componentClicked = () => {
    console.log('clicked')
  }

  return (
    <FacebookLogin
      appId='1472202059626414'
      autoLoad={true}
      fields='name,email,picture'
      onClick={componentClicked}
      callback={responseFacebook}
    />
  )
}

export default Facebook
