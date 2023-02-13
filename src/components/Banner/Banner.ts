import styled from "styled-components";

export const Banner = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 4rem;
  background-color: red;
`;

export const WelcomeContainer = styled.span`
    background-color: yellow;
    opacity: 0.5;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.5rem;
    max-width: 20rem;
`

export const Welcome = styled.span`
  @keyframes example {
    from {
      left: 0px;
    }
    to {
      left: 10px;
    }
  }

  font-size: 2rem;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
