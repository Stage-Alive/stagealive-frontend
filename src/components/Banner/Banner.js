import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLives } from 'services/lives'

const Banner = () => {
  const [lives, setLives] = useState([])
  const [live, setLive] = useState({
    id: '1',
    mainBanner: '/live_card3.png'
  })

  // useEffect(() => {
  //   async function fetchData() {
  //     const lives = await getLives(3)
  //     setLives(lives)
  //   }
  //   fetchData()
  // }, [])

  return (
    <Link href={`/live/${live.id}`}>
      <BannerStyled>
        <BannerContent>
          <Image src={live.mainBanner}></Image>
          <BannerInfo>
            <div>
              <Title>ALOK</Title>
              <Subtitle>#FiqueEmCasa</Subtitle>
            </div>
            <Button>Assistir</Button>
          </BannerInfo>
        </BannerContent>
      </BannerStyled>
    </Link>
  )
}

const Link = styled.a`
  text-decoration: none;
`

const Button = styled.button`
  padding: 10px 40px;
  margin-bottom: 80px;
  border-radius: 10px;
`

const BannerInfo = styled.div`
  background: #182131 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center !important;
  justify-content: space-between;
  margin: 0 auto;
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: row;
  background: #182131 0% 0% no-repeat padding-box;
`

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 10px;
  height: 100%;
`
const BannerStyled = styled.div`
  width: 70%;
  max-width: 700px;
  display: block;
  margin: 20px auto 0 auto;
  max-height: 600px;
  background-color: #020916;
  cursor: pointer;
`
const Title = styled.h1`
  color: #ffffff;
  font: Bold 60px/82px Open Sans;
  margin-top: 80px;
`
const Subtitle = styled.h2`
  color: #ffffff;
  max-width: 100%;
  font-size: 18px;
`

export default Banner
