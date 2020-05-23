import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import Container from 'components/Container'
import Label from 'components/Label'
import Input from 'components/Input'
import { useUser } from 'context/user-context'
import { updateUser } from 'services/auth'

const Profile = () => {
  const { user } = useUser()
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <ProfileStyled>
        <Formik
          initialValues={{ name: user.name }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values.birthdate)
            values.birthdate = values.birthdate ? new Date(values.birthdate).toISOString() : null
            await updateUser(values, user.id)
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props
            return (
              <>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                  <FormTitle>Perfil</FormTitle>
                  <Label>Nome</Label>
                  <Input>
                    <Field style={inputStyle} id='text' placeholder='Entre com seu nome' type='text' name='name' />
                  </Input>

                  <Button style={inputStyle} type='submit' disabled={isSubmitting}>
                    Salvar Alterações
                  </Button>
                </Form>
              </>
            )
          }}
        </Formik>
      </ProfileStyled>
    </Container>
  )
}

const ProfileStyled = styled.div`
  margin-top: 50px;
  width: 45%;
`

const FormTitle = styled.h1`
  color: white;
  font-size: 30px;
  padding-bottom: 20px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: white;
  border: 2px solid white;
  border-radius: 2px;
  text-align: center;
  padding: 10px;
`

export default Profile
