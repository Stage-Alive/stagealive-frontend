import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import { useAuth } from 'context/auth-context'
import Container from 'components/Container'
import FormTitle from 'components/FormTitle'
import Label from 'components/Label'
import * as Yup from 'yup'
import Facebook from 'components/Facebook'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo Obrigatório'),
  password: Yup.string().required('Campo Obrigatório')
})

const Login = () => {
  const { login } = useAuth()
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <LoginStyled>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={async (values, actions) => {
            const res = await login(values)
            if (res.error) {
              actions.setStatus({ message: 'Email ou senha inválidos' })
            }
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit, errors, touched, status } = props
            return (
              <FormStyled>
                <FormContent>
                  <Form autoComplete='off' onSubmit={handleSubmit}>
                    <FormTitle>Entre com sua conta</FormTitle>
                    <Label>Email</Label>
                    <Input>
                      <Field style={inputStyle} id='email' placeholder='Entre com seu email' type='text' name='email' />
                    </Input>
                    {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
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
                    {touched.password ? <Error>{errors.password}</Error> : null}
                    <Button style={inputStyle} type='submit' disabled={isSubmitting}>
                      Entrar
                    </Button>
                    {status && <Status>{status.message}</Status>}
                  </Form>
                </FormContent>
                {/* <FacebookButton> */}
                <Facebook />
                {/* </FacebookButton> */}
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

// const FacebookButton = styled.div`
//   margin: 0 auto;
//   border-radius: 10px;
// `

const Status = styled.h4`
  color: red;
  padding-top: 20px;
`

const Error = styled.h4`
  color: red;
`

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
  margin-top: 50px;
`

const Register = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 100px;
`

const A = styled.a`
  text-decoration: underline;
  color: #aa528d;
  font-size: 20px;
  padding-left: 30px;
  padding-bottom: 10px;
`

export default Login
