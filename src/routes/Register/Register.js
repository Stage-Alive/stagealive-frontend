import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import Input from 'components/Input'
import Container from 'components/Container'
import { useAuth } from 'context/auth-context'
import FormTitle from 'components/FormTitle'
import Label from 'components/Label'
import Button from 'components/Button'

const Register = () => {
  const { register } = useAuth()
  const inputStyle = { fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '', name: '', userTypeId: 'd48dded5-ca2b-4bd8-b790-45674f486d0d' }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values)
          const response = await register(values)
          console.log(response)
        }}
      >
        {props => {
          const { isSubmitting, handleSubmit } = props
          return (
            <RegisterStyled>
              <FormContent>
                <Form onSubmit={handleSubmit}>
                  <FormTitle as='label' variant='big'>
                    Cadastro
                  </FormTitle>
                  <Label>Nome</Label>
                  <Input>
                    <Field style={inputStyle} id='name' placeholder='Enter your name' type='text' name='name' />
                  </Input>
                  <Label>Email</Label>
                  <Input>
                    <Field style={inputStyle} id='email' placeholder='Enter your email' type='text' name='email' />
                  </Input>
                  <Label>Senha</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='password'
                      placeholder='Enter your password'
                      type='password'
                      name='password'
                    />
                  </Input>
                  <Button type='submit' disabled={isSubmitting}>
                    Enviar
                  </Button>
                </Form>
              </FormContent>
              <Login>
                <Subtitle>Já possui uma conta?</Subtitle>
                <A href='/login'>Faça seu Login e assista as lives com seus amigos</A>
              </Login>
            </RegisterStyled>
          )
        }}
      </Formik>
    </Container>
  )
}

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
`
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

const Login = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-top: 30px;
  text-align: center;
`

const A = styled.a`
  text-decoration: underline;
  color: #aa528d;
  font-size: 18px;
  padding-left: 30px;
  padding-bottom: 10px;
`

const Subtitle = styled.h3`
  font-size: 30px;
  margin-top: 60px;
  color: white;
  padding-left: 30px;
  padding-bottom: 10px;
`

export default Register
