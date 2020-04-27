import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <a href='/'>
          <Image src='/logo192.png' alt='Stage Alive' />
        </a>
      </HeaderContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #86afd1;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
`

const HeaderContent = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
  filter: invert(100%);
`

export default Header
