import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const HomeImage = styled.img`
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
`;

export const Text1 = styled.h1`
  @media (max-width: 450px) {
    text-align: center;
    font-size: 2rem;
  }
`

export const Text2 = styled.h2`
  @media (max-width: 450px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 450px) {
    flex-direction: column;
    max-width: 350px;
  }
`;
