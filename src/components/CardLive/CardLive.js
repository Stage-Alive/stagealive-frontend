import React from 'react'
import styled from 'styled-components'

const CardLive = () => {
  return (
    <CardLiveStyled>
      <div>
        <Image src='./live_card.png'></Image>
        <CardBlock>
          <CardInfo>
            <CardTitle>ALOK</CardTitle>
            <CardSubtitle>#EmCasa</CardSubtitle>
            <CardDate>03 de maio, domigno | 21:00</CardDate>
          </CardInfo>
          <CardButton>
            <Button>SAIBA MAIS</Button>
          </CardButton>
        </CardBlock>
      </div>
    </CardLiveStyled>
  )
}

const Button = styled.button`
  border: 1px solid #182131;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 10px;
  margin-right: 15px;
`

const CardBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
`
const CardSubtitle = styled.h3`
  color: #ffffff;
  font-size: 18px;
`
const CardDate = styled.p`
  color: #ffffff;
  opacity: 0.7;
  font-size: 14px;
`
const CardButton = styled.div`
  display: none;
`
const CardInfo = styled.div`
  margin: 10px 0 10px 15px;
`
const CardLiveStyled = styled.div`
  width: 300px;
  margin: 20px;
  background-color: #020916;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #ffffff;
    ${CardButton} {
      display:block;
    }
    ${CardTitle}, ${CardSubtitle}, ${CardDate} {
      color: #000000;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export default CardLive
