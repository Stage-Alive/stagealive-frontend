import React from 'react'
import { Formik, Form, Field } from 'formik'
import Row from 'components/Row'
import Text from 'components/Text'
import Link from 'components/Link'
import Facebook from 'components/Facebook'
import { useAuth } from 'context/auth-context'

const Login = () => {
  const { login } = useAuth()

  return (
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
          <>
            <Form onSubmit={handleSubmit}>
              <Text htmlFor='email' as='label' variant='big'>
                Email
              </Text>
              <Row>
                <Field id='email' placeholder='Enter your email' type='text' name='email' />
                <Field id='password' placeholder='Enter your password' type='password' name='password' />
                <button type='submit' disabled={isSubmitting}>
                  entrar
                </button>
              </Row>
            </Form>
            <Facebook></Facebook>
            <Link to='/register'>Cadastre-se aqui</Link>
          </>
        )
      }}
    </Formik>
  )
}

export default Login
