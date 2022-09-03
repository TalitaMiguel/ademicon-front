import styled from 'styled-components'

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
  background: #C92B13;
`

export const ErrorImage = styled.img`
  width: 100%;
  max-width: 350px;
`

export const ErrorText = styled.h1`
  font-size: 4rem;
  color: white;
`