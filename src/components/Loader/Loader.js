import React from 'react'
import styled from 'styled-components'

const Loader = ({ children = 'Carregando' }) => (
  <LoaderStyle>
    <LoadingStyled />
  </LoaderStyle>
)

const LoaderStyle = styled.div`
  background-color: #020916;
  height: 100vh;
`

const LoadingStyled = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  margin: 0 auto;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #aa528d;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loader
