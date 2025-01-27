import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import { createLive } from 'services/lives'
import Container from 'components/Container'
import Label from 'components/Label'
import Input from 'components/Input'
import { getPublicGroups } from 'services/groups'
import { getArtists } from 'services/artists'

const CreateLive = () => {
  const [groups, setGroups] = useState([])
  const [artists, setArtists] = useState([])

  useEffect(() => {
    async function fetchData() {
      const publicGroups = await getPublicGroups()
      setGroups(publicGroups)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const artists = await getArtists()
      setArtists(artists)
    }
    fetchData()
  }, [])

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
            groupsIds: [],
            artistsIds: [],
            highlighted: false,
            startAt: new Date().toISOString()
          }}
          onSubmit={async (values, actions) => {
            const date = new Date(values.startAt)
            values.startAt = date.toISOString()
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
                      id='name'
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
                    <Field
                      style={inputStyle}
                      id='description'
                      placeholder='Entre com a hashtag'
                      type='text'
                      name='description'
                    />
                  </Input>
                  <Label>Data e Hora</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='startAt'
                      placeholder='Entre com a data e hora'
                      type='datetime-local'
                      name='startAt'
                    />
                  </Input>
                  <Label>Imagem Principal</Label>
                  <Input>
                    <Field
                      style={inputStyle}
                      id='mainBanner'
                      placeholder='Entre com sua mensagem'
                      type='text'
                      name='mainBanner'
                    />
                  </Input>
                  <Label>Highlighted</Label>
                  <Input>
                    <Field style={inputStyle} id='highlighted' type='checkbox' name='highlighted' />
                  </Input>
                  <Label>Grupos Publicos</Label>
                  <Input>
                    <Field
                      multiple={true}
                      as='select'
                      style={inputStyle}
                      id='groupsIds'
                      placeholder='Selecione os grupos'
                      type='select'
                      name='groupsIds'
                    >
                      {groups &&
                        groups.map(group => {
                          return (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          )
                        })}
                    </Field>
                  </Input>{' '}
                  <Label>Artista</Label>
                  <Input>
                    <Field
                      multiple={true}
                      as='select'
                      style={inputStyle}
                      id='artistsIds'
                      placeholder='Selecione os Artistas'
                      type='select'
                      name='artistsIds'
                    >
                      {artists &&
                        artists.map(artist => {
                          return (
                            <option key={artist.id} value={artist.id}>
                              {artist.name}
                            </option>
                          )
                        })}
                    </Field>
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
  width: 80%;
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
