import React from 'react'
import styled from 'styled-components'

const ContainerComponent = ({ children, ...props }) => <Container {...props}>{children}</Container>

const Container = styled.div`
  width: 100%;
`

export default ContainerComponent
