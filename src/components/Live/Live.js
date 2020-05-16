import React from 'react'
import styled from 'styled-components'

const Video = ({ url, title }) => {
  return (
    <VideoStyled>
      <iframe
        title={title}
        width='100%'
        height='100%'
        src={url}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </VideoStyled>
  )
}

const VideoStyled = styled.div`
  background-color: #020916;
  width: 100px;
  height: 80vh;
  flex: 2;
`

export default Video
