import React, { Fragment } from 'react'
import styled from 'styled-components'
import useWindowDimensions from 'hooks/window-dimensions'

const Slider = ({ activeIndex, bannerdata }) => {
  const { width } = useWindowDimensions()
  const isMobile = width < 768

  return (
    <BannerStyled>
      {bannerdata.map((banner, index) => {
        return (
          <Fragment key={index}>
            {isMobile ? (
              <BannerContent key={index} active={activeIndex === index ? true : false}>
                <Image src={banner.file}></Image>
              </BannerContent>
            ) : (
              <BannerContent key={index} active={activeIndex === index ? true : false}>
                <Image src={banner.file}></Image>
                <BannerInfo>
                  <div>
                    <Title>{banner.title}</Title>
                    <Subtitle>{banner.hashtag}</Subtitle>
                  </div>
                  <Button>Assistir</Button>
                </BannerInfo>
              </BannerContent>
            )}
          </Fragment>
        )
      })}
    </BannerStyled>
  )
}

const Button = styled.button`
  padding: 10px 40px;
  margin-bottom: 80px;
  border-radius: 6px;
`

const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`

const BannerContent = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: row;
  background: #182131;
  border-radius: 10px;
`

const Image = styled.img`
  display: flex;
  max-width: 400px;
  max-height: 400px;
`
const BannerStyled = styled.div`
  margin: 20px auto 0 auto;
  background-color: #020916;
  cursor: pointer;
  border-radius: 20px;
`
const Title = styled.h1`
  color: #ffffff;
  font: Bold 40px/62px Open Sans;
  margin-top: 80px;
`
const Subtitle = styled.h2`
  color: #ffffff;
  max-width: 100%;
  font-size: 18px;
`

export default Slider
