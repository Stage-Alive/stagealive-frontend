import React from 'react'
import NextLives from 'components/NextLives'
import Container from 'components/Container'
import styled from 'styled-components'

const Lives = () => {
  return (
    <Container>
      <LivesStyled>
        <NextLives title='Lives' />
      </LivesStyled>
    </Container>
  )
}

const LivesStyled = styled.div``

export default Lives
