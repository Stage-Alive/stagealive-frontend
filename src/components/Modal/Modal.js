import React, { useState } from 'react'
import styled from 'styled-components'

const Modal = ({ handleClose, createChannel, enterChannel }) => {
  const [newChannel, setNewChannel] = useState('')
  const [channel, setChannel] = useState('')

  function handleCreateChannel() {
    createChannel(newChannel)
  }

  function handleEnterChannel() {
    enterChannel(channel)
  }

  return (
    <ModalStyle>
      <ModalMain>
        <div>
          <CloseButton onClick={handleClose}>
            <img alt='Fechar' src='/icons/close-icon.svg' />
          </CloseButton>
        </div>
        <ModalContent>
          <Title>Crie seu canal ou entre na sala de amigos</Title>
          <ModalCreateGroup>
            <Label>Nome do canal</Label>
            <ModalInputGroup>
              <Input
                id='text'
                placeholder='Entre com o nome do canal'
                type='text'
                name='channel-name'
                value={newChannel}
                onChange={content => setNewChannel(content.target.value)}
              />
              <Button onClick={handleCreateChannel}>Criar canal</Button>
            </ModalInputGroup>
          </ModalCreateGroup>
          <HR />
          <ModalCreateGroup>
            <Label>Entre no canal (URL)</Label>
            <ModalInputGroup>
              <Input
                id='text'
                placeholder='Entre com o link do canal'
                type='text'
                name='channel-name'
                value={channel}
                onChange={content => setChannel(content.target.value)}
              />
              <Button onClick={handleEnterChannel}>Entrar no canal</Button>
            </ModalInputGroup>
          </ModalCreateGroup>
        </ModalContent>
      </ModalMain>
    </ModalStyle>
  )
}

const HR = styled.hr`
  width: 100%;
  border-bottom: 1px solid #707070;
  margin-top: 30px;
`

const Input = styled.input`
  background-color: #151f2e;
  border-radius: 6px;
  padding: 5px;
  color: white;
  font-size: 18px;
  margin-right: 20px;
  flex: 2;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  color: white;
  border: 2px solid white;
  border-radius: 2px;
  text-align: center;
  padding: 10px 20px 10px 20px;
  background-color: inherit;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`

const CloseButton = styled.button`
  display: bloack;
  float: right;
  color: white;
  background-color: inherit;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px 0 0;
`

const Label = styled.p`
  color: white;
  font-size: 15px;
  padding-bottom: 5px;
  margin-top: 20px;
`

const Title = styled.h1`
  color: white;
  font-size: 20px;
  margin-top: 20px;
`

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const ModalMain = styled.section`
  border-radius: 2px;
  position: fixed;
  background-color: #020916;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const ModalContent = styled.div`
  margin: 0 40px 40px 40px;
  display: flex;
  flex-direction: column;
`

const ModalCreateGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`

const ModalInputGroup = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default Modal
