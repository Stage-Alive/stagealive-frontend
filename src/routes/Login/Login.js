import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import { useAuth } from 'context/auth-context'
import Container from 'components/Container'
import FormTitle from 'components/FormTitle'
import Label from 'components/Label'
import Facebook from 'components/Facebook'

const Login = () => {
  const { login } = useAuth()
  const inputStyle = { fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <LoginStyled>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            const response = await login(values)
            console.log(response)
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props
            return (
              <FormStyled>
                <FormContent>
                  <Form onSubmit={handleSubmit}>
                    <FormTitle>Entre com sua conta</FormTitle>
                    <Label>Email</Label>
                    <Input>
                      <Field style={inputStyle} id='email' placeholder='Entre com seu email' type='text' name='email' />
                    </Input>
                    <Label>Senha</Label>
                    <Input>
                      <Field
                        style={inputStyle}
                        id='password'
                        placeholder='Entre com sua senha'
                        type='password'
                        name='password'
                      />
                    </Input>
                    <Button style={inputStyle} type='submit' disabled={isSubmitting}>
                      Entrar
                    </Button>
                  </Form>
                </FormContent>
                {/* <Facebook />
                <Link to='/register'>Cadastre-se aqui</Link> */}
              </FormStyled>
            )
          }}
        </Formik>
        <Register>
          <Subtitle>Não possui uma conta?</Subtitle>
          <A href='/cadastro'>Cadastre-se já e assista as lives com seus amigos</A>
        </Register>
      </LoginStyled>
    </Container>
  )
}

const Input = styled.div`
  color: white;
  background-color: #151f2e;
  padding: 10px;
  color: #white;
  font-size: 24px;
  border-radius: 6px;
`

const Button = styled.button`
  color: white;
  background-color: #151f2e;
  border: 2px solid white;
  border-radius: 2px;
  text-align: center;
  display: block;
  margin: 30px 0;
  padding: 10px;
  width: 100%;
`

const Subtitle = styled.h3`
  font-size: 30px;
  margin-top: 60px;
  color: white;
  padding-left: 30px;
  padding-bottom: 10px;
`

const FormContent = styled.div`
  width: 80%;
  margin: 0 auto;
`

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;
  background-color: #10151d;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
`

const LoginStyled = styled.div`
  min-height: 100%;
`

const Register = styled.div`
  width: 100%;
  padding: 20px;
`

const A = styled.a`
  text-decoration: underline;
  color: #aa528d;
  font-size: 20px;
  padding-left: 30px;
  padding-bottom: 10px;
`

export default Login
