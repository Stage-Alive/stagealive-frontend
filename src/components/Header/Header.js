import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <a href='/'>
          <Image src='/vlive.svg' alt='Stage Alive' />
        </a>
        <Search placeholder='Encontre seus show favoritos...' type='search' results='0' />
        <Nav>
          <A href='/'>HOME</A>
          <A href='/contato'>CONTATO</A>
          <Span></Span>
          <LoginLink href='/login'>Entre</LoginLink>ou <RegisterLink href='/cadastro'>Faça seu Cadastro</RegisterLink>
        </Nav>
      </HeaderContent>
    </StyledHeader>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Search = styled.input`
  background: #38404d;
  border-radius: 30px;
  padding: 15px;
  width: 30%;
  color: white;
  font-size: 16px;
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
`

const HeaderContent = styled.div`
  background: #182131;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const A = styled.a`
  padding: 35px 20px 35px 20px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #38404d;
  }
`

const Image = styled.img`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
`

const LoginLink = styled.a`
  padding: 35px 20px 35px 20px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #38404d;
  }
  text-decoration: underline;
`

const RegisterLink = styled.a`
  padding: 35px 20px 35px 20px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #38404d;
  }
  text-decoration: underline;
`

export default Header
