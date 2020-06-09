import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return <LoadingStyled></LoadingStyled>
}

const LoadingStyled = styled.div`
  margin: auto auto;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #aa528d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
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

export default Loading
