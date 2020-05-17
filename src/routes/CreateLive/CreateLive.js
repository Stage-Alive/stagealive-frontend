import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import { createLive } from 'services/lives'
import Container from 'components/Container'
import Label from 'components/Label'
import Input from 'components/Input'

const CreateLive = () => {
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <CreateLiveStyled>
        <Formik
          initialValues={{
            name: '',
            link: '',
            description: '',
            mainBanner: '',
            secondaryBanner: '',
            date: '',
            hashtag: '',
            groupsIds: ['cff21d9e-c3ca-401b-bbe2-dca3f87b2cc8'],
            startAt: new Date().toISOString()
          }}
          onSubmit={async (values, actions) => {
            console.log(values)
            await createLive(values)
            actions.resetForm()
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props
            return (
              <>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                  <FormTitle>Formulario para criação de Lives</FormTitle>
                  <Label>Name</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='text'
                      placeholder='Entre com o nome da live'
                      type='text'
                      name='name'
                    />
                  </Input>
                  <Label>URL</Label>
                  <Input>
                    <Field style={inputStyle} id='email' placeholder='Entre com a url' type='text' name='link' />
                  </Input>
                  {/* <Label>Dia e Horário</Label>
                  <Input>
                    <Field style={inputStyle} id='text' placeholder='Entre com sua mensagem' type='text' name='date' />
                  </Input> */}
                  <Label>Hashtag</Label>
                  <Input>
                    <Field style={inputStyle} id='text' placeholder='Entre com a hashtag' type='text' name='hashtag' />
                  </Input>
                  <Label>Imagem Principal</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='text'
                      placeholder='Entre com sua mensagem'
                      type='text'
                      name='mainImage'
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
      </CreateLiveStyled>
    </Container>
  )
}

const CreateLiveStyled = styled.div`
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

export default CreateLive
