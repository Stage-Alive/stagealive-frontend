import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <a href='/'>
          <Image src='/vlive.svg' alt='Stage Alive' />
        </a>
      </HeaderContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #182131;
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

const HeaderContent = styled.div`
  background: #182131;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
`

export default Header
