import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import { createContact } from 'services/contact'
import Container from 'components/Container'
import Label from 'components/Label'
import Input from 'components/Input'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Nome muito pequeno').max(70, 'Nome muito grande').required('Campo Obrigatório'),
  email: Yup.string().email('Email inválido').optional('Campo Obrigatório'),
  message: Yup.string().optional('Campo Obrigatório')
})

const Contact = () => {
  const inputStyle = { width: '100%', fontSize: '24px', color: 'white', backgroundColor: '#151f2e' }

  return (
    <Container>
      <ContactStyled>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={async (values, actions) => {
            await createContact(values)
            actions.resetForm()
            actions.setStatus({ success: 'Enviado com sucesso!' })
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit, errors, touched, status } = props
            return (
              <>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                  <FormTitle>Deixe suas dúvidas e sugetões!</FormTitle>
                  <Subtitle>Informações Pessoais</Subtitle>
                  <Label>Nome</Label>
                  <Input>
                    <Field style={inputStyle} id='text' placeholder='Entre com seu nome' type='text' name='name' />
                  </Input>
                  {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
                  <Label>Email</Label>
                  <Input>
                    <Field style={inputStyle} id='email' placeholder='Entre com seu email' type='text' name='email' />
                  </Input>
                  {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
                  <Label>Mensagem</Label>
                  <Input>
                    <Field
                      as='textarea'
                      style={inputStyle}
                      id='message'
                      placeholder='Entre com sua mensagem'
                      type='textarea'
                      name='message'
                    />
                  </Input>
                  {errors.message && touched.message ? <Error>{errors.message}</Error> : null}
                  <Button style={inputStyle} type='submit' disabled={isSubmitting}>
                    Enviar
                  </Button>
                  {status && <Status>{status.success}</Status>}
                </Form>
              </>
            )
          }}
        </Formik>
      </ContactStyled>
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

const ContactStyled = styled.div`
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

const Subtitle = styled.h3`
  font-size: 24px;
  color: white;
  padding-bottom: 10px;
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

export default Contact
