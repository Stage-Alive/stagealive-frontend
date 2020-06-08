import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import { forgetPassword } from 'services/auth'
import Container from 'components/Container'
import Label from 'components/Label'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required('Campo Obrigatório')
})

const ForgetPassword = props => {
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <ForgetPasswordStyled>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={SignupSchema}
          onSubmit={async (values, actions) => {
            await forgetPassword(values)
            actions.setStatus({ message: 'Acesse seu email para resetar sua senha' })
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit, errors, touched, status } = props
            return (
              <FormStyled>
                <FormContent>
                  <Form autoComplete='off' onSubmit={handleSubmit}>
                    <Label>Informe seu email</Label>
                    <Input>
                      <Field style={inputStyle} id='email' placeholder='Entre com seu email' type='text' name='email' />
                    </Input>
                    {touched.email ? <Error>{errors.email}</Error> : null}
                    <Button style={inputStyle} type='submit' disabled={isSubmitting}>
                      Confirmar
                    </Button>
                    {status && <Status>{status.message}</Status>}
                  </Form>
                </FormContent>
              </FormStyled>
            )
          }}
        </Formik>
      </ForgetPasswordStyled>
    </Container>
  )
}

const Status = styled.h4`
  color: green;
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

const ForgetPasswordStyled = styled.div`
  min-height: 100%;
  margin-top: 50px;
`

export default ForgetPassword
