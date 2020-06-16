import React from 'react'
import NextLives from 'components/NextLives'
import Container from 'components/Container'
import styled from 'styled-components'

const Lives = () => {
  return (
    <Container>
      <LivesStyled>
        <NextLives title='Lives' linkButton={false} maxChildren={10000} />
      </LivesStyled>
    </Container>
  )
}

const LivesStyled = styled.div`
  width: 80%;
`

export default Lives
