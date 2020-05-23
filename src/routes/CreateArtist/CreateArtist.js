import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import { createArtist } from 'services/artists'
import Container from 'components/Container'
import Label from 'components/Label'
import Input from 'components/Input'
import * as Yup from 'yup'

const CreateArtistSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Nome muito pequeno').max(70, 'Nome muito grande').required('Campo Obrigatório'),
  contactEmail: Yup.string().email('Email inválido').optional(),
  conatctPhone: Yup.string().optional()
})

const CreateArtist = () => {
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <CreateArtistStyled>
        <Formik
          initialValues={{
            name: '',
            contactEmail: '',
            contactPhone: ''
          }}
          validationSchema={CreateArtistSchema}
          onSubmit={async (values, actions) => {
            // TODO: should be a better way to do this
            values.contactEmail = values.contactEmail.lenght ? values.contactEmail.lenght : null
            values.contactPhone = values.contactPhone.lenght ? values.contactPhone.lenght : null
            await createArtist(values)
            actions.resetForm()
            actions.setStatus({ success: 'Enviado com sucesso!' })
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit, errors, touched, status } = props
            return (
              <>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                  <FormTitle>Formulario para adição de Artista</FormTitle>
                  <Label>Nome</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='name'
                      placeholder='Entre com o nome do Artista'
                      type='text'
                      name='name'
                    />
                  </Input>
                  {errors.name && touched.name ? <Error>{errors.name}</Error> : null}

                  <Label>Email</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='contactEmail'
                      placeholder='Entre com o email'
                      type='text'
                      name='contactEmail'
                    />
                  </Input>
                  <Label>Telefone</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='contactPhone'
                      placeholder='Entre com o telefone'
                      type='text'
                      name='contactPhone'
                    />
                  </Input>
                  <Button onClick={handleSubmit} style={inputStyle} type='submit' disabled={isSubmitting}>
                    Enviar
                  </Button>
                  {status && <Status>{status.success}</Status>}
                </Form>
              </>
            )
          }}
        </Formik>
      </CreateArtistStyled>
    </Container>
  )
}

const Status = styled.h4`
  color: green;
  padding-top: 20px;
`

const Error = styled.div`
  color: red;
`

const CreateArtistStyled = styled.div`
  margin-top: 50px;
  width: 45%;
  @media (max-width: 768px) {
    width: 80%;
  }
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

export default CreateArtist
