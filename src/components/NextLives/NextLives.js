import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardLive from 'components/CardLive'
import { getLives } from 'services/lives'

const NextLives = ({ maxChildren = 6 }) => {
  const [lives, setLives] = useState([])

  useEffect(() => {
    async function fetchData() {
      const lives = await getLives(maxChildren)
      setLives(lives)
    }
    fetchData()
  }, [])

  return (
    <NextLivesStyled>
      <Title>
        <Icon src='/play-icon.svg'></Icon>
        Próximas Lives
      </Title>
      <Cards>
        {lives.map((live, index) => {
          return <CardLive live={live} key={index}></CardLive>
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
