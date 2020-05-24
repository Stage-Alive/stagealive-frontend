import React from 'react'
import styled from 'styled-components'

const CardLive = ({ live }) => {
  return (
    <Link href={`/live/${live.id}`}>
      <CardLiveStyled>
        <div>
          <Image src={live.mainBanner}></Image>
          <CardBlock>
            <CardInfo>
              <CardTitle>{live.name}</CardTitle>
              <CardSubtitle>#hashtag</CardSubtitle>
              <CardDate>{live.startAt}</CardDate>
            </CardInfo>
            <CardButton>
              <Button>SAIBA MAIS</Button>
            </CardButton>
          </CardBlock>
        </div>
      </CardLiveStyled>
    </Link>
  )
}

const Link = styled.a`
  text-decoration: none;
`

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
  max-width: 100%;
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
  max-height: 600px;
  margin: 20px 40px 20px 0;
  background-color: #020916;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #ffffff;
    ${CardInfo} {
    }
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
  border-radius: 10px;
  height: 100%;
`

export default CardLive
