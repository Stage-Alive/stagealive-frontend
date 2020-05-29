import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faYoutube, faFacebook, faInstagram)

const Footer = ({ displayFooter = true }) => {
  return (
    <StyledFooter displayFooter={displayFooter}>
      <FooterContent>
        <Social>
          <Paragraph>
            <strong>Suas LIVES nas redes socias</strong>
          </Paragraph>
          <Icons>
            {/* <a href='https://facebook.com'>
              <FontAwesomeIcon size='2x' icon={faFacebook} style={{ marginRight: '40px', color: 'rgb(72, 99, 160)' }} />
            </a> */}
            <a href='https://instagram.com'>
              <FontAwesomeIcon
                size='2x'
                icon={faInstagram}
                style={{ marginRight: '40px', color: 'rgb(170, 82, 141)' }}
              />
            </a>
            {/* <a href='https://youtube.com'>
              <FontAwesomeIcon size='2x' icon={faYoutube} style={{ marginRight: '40px', color: 'rgb(231, 68,67)' }} />
            </a> */}
          </Icons>
        </Social>
        <Contact>
          <Paragraph>
            <strong>Divulgue sua live aqui!</strong>
          </Paragraph>
          <Paragraph>contato@teste.com</Paragraph>
        </Contact>
      </FooterContent>
      <Paragraph>Empresa X, todos os direitos reservados - 2020</Paragraph>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #182131;
  color: white;
  text-align: center;
  height: 180px;
  @media (max-width: 768px) {
    display: ${props => (props.displayFooter ? 'block' : 'none')};
  }
`

const FooterContent = styled.div`
  background: #182131;
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const Paragraph = styled.div`
  margin-top: 20px;
`

const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 0 0 0;
`

const Social = styled.div``

export default Footer
