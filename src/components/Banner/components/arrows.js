import React from 'react'
import styled from 'styled-components'

export const LeftArrow = ({ goToPrevSlide }) => {
  return (
    <BackArrow onClick={() => goToPrevSlide()}>
      <LeftIcon src='/icons/left-arrow.svg' />
    </BackArrow>
  )
}

export const RightArrow = ({ goToNextSlide }) => {
  return (
    <NextArrow onClick={() => goToNextSlide()}>
      <RightIcon src='/icons/right-arrow.svg' />
    </NextArrow>
  )
}

const BackArrow = styled.div`
  cursor: pointer;
`

const NextArrow = styled.div`
  cursor: pointer;
`

const RightIcon = styled.img`
  filter: invert();
  width: 40px;
`

const LeftIcon = styled.img`
  filter: invert();

  width: 40px;
`
