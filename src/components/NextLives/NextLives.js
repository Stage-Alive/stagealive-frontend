import React from 'react'
import styled from 'styled-components'
import CardLive from 'components/CardLive'
const SIX_ITEMS = ['1', '2', '3', '4', '5', '6']

const NextLives = ({ maxChildren = 6 }) => {
  SIX_ITEMS.length = maxChildren

  return (
    <NextLivesStyled>
      <Title>
        <Icon src='play-icon.svg'></Icon>
        Próximas Lives
      </Title>
      <Cards>
        {SIX_ITEMS.map(item => {
          return <CardLive></CardLive>
        })}
      </Cards>
      <Button>Veja todas as lives</Button>
    </NextLivesStyled>
  )
}

const Icon = styled.img`
  margin-right: 10px;
`

const Title = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin: 30px 0 0 30px;
`

const NextLivesStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%;
`

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Button = styled.button`
  display: block;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  color: white;
  background: #020916;
  border: 2px solid white;
  border-radius: 10px;
  text-align: center;
  width: 200px;
  padding: 20px;
`

export default NextLives
