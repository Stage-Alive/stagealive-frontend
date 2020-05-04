import React from 'react'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = response => {
  console.log(response)
}

const componentClicked = () => {
  console.log('clicked')
}

function Facebook() {
  return (
    <FacebookLogin
      appId='1472202059626414'
      autoLoad={true}
      fields='name,email,profile'
      onClick={componentClicked}
      callback={responseFacebook}
    />
  )
}

export default Facebook
