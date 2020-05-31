import React from 'react'
import styled from 'styled-components'

const Video = ({ url, title }) => {
  return (
    <VideoStyled>
      <iframe
        title={title}
        width='100%'
        height='100%'
        src={`${url}?playsinline=1`}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </VideoStyled>
  )
}

const VideoStyled = styled.div`
  background-color: #020916;
  width: 70%;
  height: 80vh;
  @media (max-width: 768px) {
    min-height: 20vh;
    height: 40vh;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`

export default Video
