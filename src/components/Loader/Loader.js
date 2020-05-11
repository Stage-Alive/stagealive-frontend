import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Loader = ({ children = 'Carregando' }) => <LoaderStyle />

const LoaderStyle = styled.div`
  background-color: #020916;
  height: 100vh;
`

Loader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default Loader
