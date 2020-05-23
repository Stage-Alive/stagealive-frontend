import React from 'react'
import styled from 'styled-components'
import { useUser } from 'context/user-context'
import { useAuth } from 'context/auth-context'

const Header = () => {
  const { user } = useUser()
  const { logout } = useAuth()

  return (
    <StyledHeader>
      <HeaderContent>
        <a href='/home'>
          <Image src='/icons/vlive.svg' alt='Stage Alive' />
        </a>
        {/* <Search placeholder='Encontre seus show favoritos...' type='search' results='0' /> */}
        <Nav>
          <A href='/home'>HOME</A>
          <A href='/lives'>LIVES</A>
          <A href='/contato'>CONTATO</A>
          <Span></Span>
          {user ? (
            <Dropdown>
              <DropdownButton>
                Olá, {user && user.name}
                <Icon src='/icons/chevron-down-solid.svg'></Icon>
              </DropdownButton>
              <DropdownOptions>
                <DropdownLink href='/perfil'>Meu Perfil</DropdownLink>
                <DropdownLink onClick={logout}>Sair</DropdownLink>
              </DropdownOptions>
            </Dropdown>
          ) : (
            <>
              <LoginLink href='/login'>Entre</LoginLink>ou{' '}
              <RegisterLink href='/cadastro'>Faça seu Cadastro</RegisterLink>
            </>
          )}
        </Nav>
      </HeaderContent>
    </StyledHeader>
  )
}

const DropdownOptions = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`
const DropdownButton = styled.button`
  padding: 30px 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background-color: #182131;
  &:hover {
    background-color: #38404d;
  }
`

const Dropdown = styled.div`
  max-height: 80px;
  float: left;
  overflow: hidden;
  color: white;
  &:hover {
    ${DropdownOptions} {
      display: block;
    }
  }
`

const DropdownLink = styled.a`
  float: none;
  color: white;
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: #182131;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #38404d;
  }
`

const Icon = styled.img`
  filter: invert();
  margin-left: 10px;
  opacity: 1;
  width: 10px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

// const Search = styled.input`
//   background: #38404d;
//   border-radius: 30px;
//   padding: 15px;
//   width: 30%;
//   color: white;
//   font-size: 16px;
// `

const Span = styled.span`
  height: 50px;
  border: 0.5px solid #707070;
  opacity: 1;
`

const StyledHeader = styled.header`
  background: #182131;
  height: 80px;
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
  padding: 30px 20px;
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
  width: 60px;
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
