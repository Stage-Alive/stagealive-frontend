import React from 'react'
import styled from 'styled-components'

const Loader = ({ children = 'Carregando' }) => <LoaderStyle />

const LoaderStyle = styled.div`
  background-color: #020916;
  height: 100vh;
`

export default Loader
