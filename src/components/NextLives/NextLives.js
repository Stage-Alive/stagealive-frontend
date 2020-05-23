import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardLive from 'components/CardLive'
import { getLives } from 'services/lives'

const NextLives = ({ title = 'Próximas Lives', maxChildren = 6 }) => {
  const [lives, setLives] = useState([])

  useEffect(() => {
    async function fetchData() {
      const lives = await getLives(maxChildren)
      setLives(lives)
    }
    fetchData()
  }, [maxChildren])

  return (
    <div>
      <TitleStyled>
        <Title>
          <Icon src='/icons/play-icon.svg'></Icon>
          {title}
        </Title>
      </TitleStyled>
      <NextLivesStyled>
        <Cards>
          {lives.map((live, index) => {
            return <CardLive live={live} key={index}></CardLive>
          })}
        </Cards>
        {title === 'Lives' ? (
          <Button>Veja mais</Button>
        ) : (
          <A href='/lives'>
            <Button>Veja todas as lives</Button>
          </A>
        )}
      </NextLivesStyled>
    </div>
  )
}

const TitleStyled = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: flex-start;
`

const A = styled.a`
  text-decoration: none;
`

const Icon = styled.img`
  margin-right: 10px;
`

const Title = styled.h1`
  font-size: 30px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start !important;
  align-items: flex-start;
`

const NextLivesStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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
