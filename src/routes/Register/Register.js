import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import Input from 'components/Input'
import Container from 'components/Container'
import { useAuth } from 'context/auth-context'
import Label from 'components/Label'
import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Nome muito pequeno').max(70, 'Nome muito grande').required('Campo Obrigatório'),
  email: Yup.string().email('Email inválido').required('Campo Obrigatório'),
  password: Yup.string().required('Campo Obrigatório'),
  terms: Yup.boolean().oneOf([true], 'Obrigatório aceitar termos e condições')
})

const Register = () => {
  const { register } = useAuth()

  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  useEffect(() => {
    return () => {
      const redirect = window.localStorage.getItem('live')
      if (redirect) {
        window.localStorage.removeItem('live')
        window.location.href = redirect
      }
    }
  })

  return (
    <Container>
      <RegisterPage>
        <Banner imgUrl='banner-register.png'>
          <BannerTitle>Acompanhe as LIVES com seus amigos!</BannerTitle>
        </Banner>
        <RegisterContent>
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              terms: false
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values, actions) => {
              delete values.terms
              const res = await register(values)
              if (res.error) {
                actions.setStatus({ message: 'Não conseguimos realizar seu cadastro, tente com outro email' })
              }
            }}
          >
            {props => {
              const { isSubmitting, handleSubmit, errors, touched, status } = props
              return (
                <RegisterStyled>
                  <FormContent>
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                      <Subtitle>Cadastro</Subtitle>
                      <Label>Nome</Label>
                      <Input>
                        <Field style={inputStyle} id='name' placeholder='Entre com seu nome' type='text' name='name' />
                      </Input>
                      {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
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
                      {/* <Label>Repetir senha</Label> */}
                      {/* <Input>
                        <Field
                          style={inputStyle}
                          id='rewrite_password'
                          placeholder='Repita sua senha'
                          type='password'
                          name='retyPassword'
                          />
                        </Input> */}
                      {status && <Status>{status.message}</Status>}
                      <Terms>
                        <TextTerm>
                          <Field type='checkbox' name='terms' />
                          Aceito os{' '}
                          <Link href='https://vliveprod.s3-sa-east-1.amazonaws.com/Pol%C3%ADtica+de+Privacidade.pdf'>
                            termos da politica de privacidade
                          </Link>
                        </TextTerm>
                        <ButtonTerm onClick={handleSubmit} type='submit' disabled={isSubmitting}>
                          Cadastrar
                        </ButtonTerm>
                      </Terms>
                      {errors.terms && touched.terms ? <Error>{errors.terms}</Error> : null}
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
        </RegisterContent>
      </RegisterPage>
    </Container>
  )
}

const Status = styled.h4`
  color: red;
  padding-top: 20px;
`
const Error = styled.div`
  color: red;
`

const Link = styled.a`
  color: #fff;
`

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
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
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
