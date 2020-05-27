import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import { resetPassword } from 'services/auth'
import Container from 'components/Container'
import Label from 'components/Label'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  password: Yup.string().required('Campo Obrigatório'),
  confirmPassword: Yup.string().required('Campo Obrigatório')
})

const ResetPassword = props => {
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }
  const params = new URLSearchParams(props.location.search)
  const token = params.get('token')

  return (
    <Container>
      <ResetPasswordStyled>
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={SignupSchema}
          onSubmit={async (values, actions) => {
            await resetPassword({
              password: values.password,
              token
            })
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit, errors, touched, status } = props
            return (
              <FormStyled>
                <FormContent>
                  <Form autoComplete='off' onSubmit={handleSubmit}>
                    <Label>Nova senha</Label>
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
                    <Label>Confirmar senha</Label>
                    <Input>
                      <Field
                        style={inputStyle}
                        id='confirmPassword'
                        placeholder='Entre com sua senha'
                        type='password'
                        name='confirmPassword'
                      />
                    </Input>
                    {touched.Password ? <Error>{errors.confirmPassword}</Error> : null}
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
      </ResetPasswordStyled>
    </Container>
  )
}

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

const ResetPasswordStyled = styled.div`
  min-height: 100%;
  margin-top: 50px;
`

export default ResetPassword
