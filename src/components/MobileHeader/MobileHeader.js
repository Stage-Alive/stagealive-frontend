import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from 'context/auth-context'
import { useUser } from 'context/user-context'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { logout } = useAuth()
  const { user } = useUser()

  return (
    <StyledHeader>
      <HeaderContent>
        <Dropdown menuOpen={menuOpen}>
          <DropdownButton>
            <BurguerIcon onClick={() => setMenuOpen(!menuOpen)}>
              <Bar1 menuOpen={menuOpen}></Bar1>
              <Bar2 menuOpen={menuOpen}></Bar2>
              <Bar3 menuOpen={menuOpen}></Bar3>
            </BurguerIcon>
          </DropdownButton>
          <DropdownOptions>
            <DropdownLink href='/'>HOME</DropdownLink>
            <DropdownLink href='/lives'>LIVES</DropdownLink>
            <DropdownLink href='/contato'>CONTATO</DropdownLink>
            {user ? (
              <>
                <DropdownLink href='/perfil'>MEU PERFIL</DropdownLink>
                <DropdownLink onClick={logout}>SAIR</DropdownLink>
              </>
            ) : (
              <>
                <DropdownLink href='/cadastro'>CADASTRO</DropdownLink>
                <DropdownLink href='/login'>ENTRAR</DropdownLink>
              </>
            )}
          </DropdownOptions>
        </Dropdown>
        <a href='/home'>
          <Image src='/icons/vlive.svg' alt='Stage Alive' />
        </a>
        <div></div>
      </HeaderContent>
    </StyledHeader>
  )
}

const Bar1 = styled.div`
  border-radius: 2px;
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  ${props =>
    props.menuOpen
      ? `
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px)
  `
      : ''}
`
const Bar2 = styled.div`
  border-radius: 2px;
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  ${props => (props.menuOpen ? 'opacity: 0' : '')}
`
const Bar3 = styled.div`
  border-radius: 2px;
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  ${props =>
    props.menuOpen
      ? `
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
    `
      : ''}
`

const BurguerIcon = styled.div`
  display: inline-block;
  cursor: pointer;
`

const DropdownOptions = styled.div`
  display: none;
  margin-left: -20px;
  margin-top: 5px;
  width: 100%;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 1;
`
const DropdownButton = styled.button`
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background-color: #182131;
`

const Dropdown = styled.div`
  margin-bottom: 2px;
  max-height: 90px;
  float: left;
  overflow: hidden;
  color: white;
  ${props =>
    props.menuOpen
      ? `    ${DropdownOptions} {
    display: block;
  }`
      : ''}
`

const DropdownLink = styled.a`
  float: none;
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;
  background-color: #182131;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  margin-right: -30px;
  &:hover {
    background-color: #38404d;
  }
  &:last-child {
    color: #e74043;
  }
`

const StyledHeader = styled.header`
  background: #182131;
  height: 60px;
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

const Image = styled.img`
  width: 50px;
`

export default Header
