import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'

import Container from 'components/Container'
import Label from 'components/Label'
import Input from 'components/Input'

const Contact = () => {
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <ContactStyled>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            // const response = await login(values)
            // console.log(response)
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props
            return (
              <Form onSubmit={handleSubmit}>
                <FormTitle>Deixe suas dúvidas e sugetões!</FormTitle>
                <Subtitle>Informações Pessoais</Subtitle>
                <Label>Name</Label>
                <Input>
                  <Field style={inputStyle} id='text' placeholder='Entre com seu nome' type='text' name='name' />
                </Input>
                <Label>Email</Label>
                <Input>
                  <Field style={inputStyle} id='email' placeholder='Entre com seu email' type='text' name='email' />
                </Input>
                <Label>Mensagem</Label>
                <Input>
                  <Field
                    as='textarea'
                    style={inputStyle}
                    id='mensagem'
                    placeholder='Entre com sua mensagem'
                    type='textarea'
                    name='mensagem'
                  />
                </Input>
                <Button style={inputStyle} type='submit' disabled={isSubmitting}>
                  Enviar
                </Button>
              </Form>
            )
          }}
        </Formik>
      </ContactStyled>
    </Container>
  )
}

const ContactStyled = styled.div`
  margin-top: 50px;
  width: 45%;
`

const FormTitle = styled.h1`
  color: white;
  font-size: 30px;
  padding-bottom: 20px;
`

const Subtitle = styled.h3`
  font-size: 24px;
  color: white;
  padding-bottom: 10px;
`
const Button = styled.button`
  color: white;
  border: 2px solid white;
  border-radius: 2px;
  text-align: center;
  margin: 30px 0;
  padding: 10px;
`

export default Contact
