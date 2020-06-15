import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Slider from './components/slide'
import { getLives } from 'services/lives'

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [lives, setLives] = useState([])

  useEffect(() => {
    async function fetchData() {
      const lives = await getLives(6, true) // highlight flag
      setLives(lives)
      setLength(lives.length)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (length > 0) {
      const interval = setInterval(goToNextSlide, 3000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [activeIndex])

  // function goToPrevSlide() {
  //   if (activeIndex < 1) {
  //     setActiveIndex(length - 1)
  //   } else {
  //     setActiveIndex(activeIndex - 1)
  //   }
  // }

  function goToNextSlide() {
    if (activeIndex === length - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }

  return (
    <Carrousel onTouchStart={goToNextSlide}>
      <BannerStyled>
        <Slider activeIndex={activeIndex} bannerdata={lives} />
        <Dots>
          {lives.map((_, index) => (
            <Dot key={index} active={activeIndex === index ? true : false} onClick={() => setActiveIndex(index)}></Dot>
          ))}
        </Dots>
      </BannerStyled>
    </Carrousel>
  )
}

const Dots = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Dot = styled.span`
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 10px 5px;

  background-color: ${props => (props.active ? '#fff' : '#182131')};
  border-radius: 50%;
  transition: background-color 0.6s ease;
`

const Carrousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BannerStyled = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto 0 auto;
  max-height: 600px;
  background-color: #020916;
  cursor: pointer;
  outiline: none;
  -webkit-tap-highlight-color: transparent;
  @media (max-width: 768px) {
    width: inherit;
  }
`

export default Banner
