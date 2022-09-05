import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const ErrorImage = styled.img`
  width: 100%;
  max-width: 350px;
`;

export const ErrorText = styled.h1`
  font-size: 4rem;
  color: #b7312c;

  @media (max-width: 450px) {
    text-align: center;
    font-size: 3.5rem;
  }
`;
