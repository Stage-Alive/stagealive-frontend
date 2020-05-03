import React from 'react'
import { Formik, Form, Field } from 'formik'
import Row from 'components/Row'
import Text from 'components/Text'
import { useAuth } from 'context/auth-context'

const Register = () => {
  const { register } = useAuth()

  return (
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
          <Form onSubmit={handleSubmit}>
            <Text as='label' variant='big'>
              Cadastro
            </Text>
            <Row>
              <Field id='name' placeholder='Enter your name' type='text' name='name' />
              <Field id='email' placeholder='Enter your email' type='text' name='email' />
              <Field id='password' placeholder='Enter your password' type='password' name='password' />
              <button type='submit' disabled={isSubmitting}>
                enviar
              </button>
            </Row>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Register
