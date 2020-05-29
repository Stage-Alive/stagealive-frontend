import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { useAuth } from 'context/auth-context'
import './facebook.css'

function Facebook() {
  const { facebookLogin } = useAuth()

  // TO DO: Remove email and password from json, they shouldn't be sent.

  const responseFacebook = async response => {
    await facebookLogin({
      name: response.name,
      email: response.email,
      facebookId: response.id,
      accessToken: response.access_token
    })
  }

  const componentClicked = () => {
    console.log('click')
  }

  return (
    <FacebookLogin
      appId='1472202059626414'
      autoLoad={false}
      fields='name,email,picture'
      onClick={componentClicked}
      callback={responseFacebook}
      textButton='Entre com o facebook'
      size='metro'
      cssClass='button'
      isMobile={false}
      icon={<img alt='facebook' className='icon' src='/icons/facebook-icon.svg' />}
    />
  )
}

export default Facebook
