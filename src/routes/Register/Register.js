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
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <RegisterPage>
        <Banner imgUrl='banner-register.png'>
          <BannerTitle>Acompanhe as LIVES com seus amigos!</BannerTitle>
        </Banner>
        <RegisterContent>
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
                      <Subtitle>Cadastro</Subtitle>
                      <Label>Nome</Label>
                      <Input>
                        <Field style={inputStyle} id='name' placeholder='Entre com seu nome' type='text' name='name' />
                      </Input>
                      <Label>Email</Label>
                      <Input>
                        <Field
                          style={inputStyle}
                          id='email'
                          placeholder='Entre com seu email'
                          type='text'
                          name='email'
                        />
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
                      <Label>Repetir senha</Label>
                      <Input>
                        <Field
                          style={inputStyle}
                          id='rewrite password'
                          placeholder='Repita sua senha'
                          type='password'
                          name='password'
                        />
                      </Input>
                    </Form>
                    <Terms>
                      <TextTerm>
                        <input type='checkbox' />
                        Aceito os termos da politica de privacidade
                      </TextTerm>
                      <ButtonTerm>Cadastrar</ButtonTerm>
                    </Terms>
                  </FormContent>
                  <Login>
                    <Subtitle>Já possui uma conta?</Subtitle>
                    <A href='/login'>Faça seu Login e assista as lives com seus amigos</A>
                  </Login>
                </RegisterStyled>
              )
            }}
          </Formik>
        </RegisterContent>
      </RegisterPage>
    </Container>
  )
}

const RegisterPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 120px;
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background: url(${props => props.imgUrl});
`

const BannerTitle = styled.h1`
  color: white;
  font-size: 30px;
  margin: 80px;
`

const RegisterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`

const ButtonTerm = styled.button`
  font-size: 18px;
  color: white;
  background-color: #020916;
  border: 2px solid white;
  border-radius: 2px;
  text-align: center;
  display: block;
  padding: 15px;
  width: 40%;
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
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

const A = styled.a`
  text-decoration: underline;
  color: #aa528d;
  font-size: 18px;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 10px;
`

const Subtitle = styled.h3`
  font-size: 30px;
  color: white;
`

const TextTerm = styled.p`
  color: white;
`

const Terms = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Register
