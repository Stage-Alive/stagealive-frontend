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
              <FirstSection>
                <FormContent>
                  <Form onSubmit={handleSubmit}>
                    <FormTitle as='label' variant='big'>
                      Cadastro
                    </FormTitle>
                    <Label>Nome</Label>
                    <Input>
                      <Field style={inputStyle} id='name' placeholder='Entre com seu nome' type='text' name='name' />
                    </Input>
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
                </FormContent>
                <Login>
                  <Subtitle>Já possui uma conta?</Subtitle>
                  <A href='/login'>Faça seu Login e assista as lives com seus amigos</A>
                </Login>
              </FirstSection>
              <HorizontalLine />
              <SecondSection>
                <TermsTitle>Termos e Condições</TermsTitle>
                <Terms>
                  <Paragraph>
                    Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet
                    lectus non tristique. Nunc ut volutpat lectus. Nulla velit augue, pulvinar sed nisi sit amet,
                    eleifend fermentum est. Quisque nibh justo, congue ut erat at, aliquet efficitur purus. Integer
                    venenatis odio vitae orci efficitur mollis. Donec ultrices diam dictum dignissim vestibulum. Proin
                    eleifend nunc nunc. Sed non arcu eget lorem viverra sodales.
                  </Paragraph>
                  <ButtonTerm>Aceitar e Cadastrar</ButtonTerm>
                </Terms>
              </SecondSection>
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
  margin-top: 50px;
`

const FirstSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  opacity: 1;
`

const SecondSection = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
`

const HorizontalLine = styled.hr`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: 1px solid #222730;
  opacity: 1;
`

const Terms = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonTerm = styled.button`
  font-size: 20px;
  color: white;
  background-color: #020916;
  border: 2px solid white;
  border-radius: 2px;
  text-align: center;
  display: block;
  width: 100%;
  margin-left: 60px;
  margin-right: 60px;
`

const Paragraph = styled.p`
  color: white;
  font-size: 15px;
`

const TermsTitle = styled.h4`
  color: white;
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
  margin-top: 40px;
  margin-left: 80px;
  text-align: center;
  align-items: center;
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
