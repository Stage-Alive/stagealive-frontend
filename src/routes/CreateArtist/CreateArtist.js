import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import { createArtist } from 'services/artists'
import Container from 'components/Container'
import Label from 'components/Label'
import Input from 'components/Input'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Nome muito pequeno').max(70, 'Nome muito grande').required('Campo Obrigatório'),
  contactEmail: Yup.string().email('Email inválido').required('Campo Obrigatório'),
  password: Yup.string().required('Campo Obrigatório')
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
          validationSchema={SignupSchema}
          onSubmit={async (values, actions) => {
            console.log(values)
            await createArtist(values)
            actions.resetForm()
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props
            return (
              <>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                  <FormTitle>Formulario para adição de Artista</FormTitle>
                  <Label>Nome</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='text'
                      placeholder='Entre com o nome do Artista'
                      type='text'
                      name='name'
                    />
                  </Input>
                  <Label>Email</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='email'
                      placeholder='Entre com o email'
                      type='text'
                      name='contactEmail'
                    />
                  </Input>
                  <Label>Telefone</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='text'
                      placeholder='Entre com a hashtag'
                      type='phone'
                      name='contactPhone'
                    />
                  </Input>
                  <Label>Imagem Principal</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='text'
                      placeholder='Entre com sua mensagem'
                      type='text'
                      name='mainBanner'
                    />
                  </Input>
                  <Label>Imagem Secundaria</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='text'
                      placeholder='Entre com sua mensagem'
                      type='text'
                      name='secondaryBanner'
                    />
                  </Input>
                  <Button style={inputStyle} type='submit' disabled={isSubmitting}>
                    Enviar
                  </Button>
                </Form>
              </>
            )
          }}
        </Formik>
      </CreateArtistStyled>
    </Container>
  )
}

const CreateArtistStyled = styled.div`
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

export default CreateArtist
