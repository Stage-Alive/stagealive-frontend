import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <a href='/'>
          <Image src='/vlive.svg' alt='Stage Alive' />
        </a>
        <Search placeholder='Encontre seus show favoritos...' type='search' />
        <Nav>
          <List>
            <Item>HOME</Item>
            <Item>CADASTRO</Item>
            <Item>
              <Span></Span>
            </Item>
            <Item>
              <A href='/login'>Entre</A>ou <A href='/cadastro'>Faça seu Cadastro</A>
            </Item>
          </List>
        </Nav>
      </HeaderContent>
    </StyledHeader>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const Search = styled.input`
  background: #38404d;
  border-radius: 30px;
  padding: 15px;
  width: 30%;
  color: white;
  font-size: 16px;
`

const List = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Item = styled.li`
  padding: 20px;
  font-weight: 600;
  font-size: 14px;
`

const Span = styled.span`
  border: 1px solid #707070;
  opacity: 1;
`

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
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const A = styled.a`
  padding: 10px;
  color: inherit;
`

const Image = styled.img`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
`

export default Header
