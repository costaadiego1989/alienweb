import styled from "styled-components";
import WorldBackground from "../../assets/images/world-background.png";

export const AboutmeContainer = styled.section`
  max-width: 100vw;
  background: url(${WorldBackground}) no-repeat fixed center;
  background-size: cover;
  display: flex;
  padding: 4rem;
  z-index: -2;

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

export const AboutmeContent = styled.div`
  max-width: 100vw;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 4rem auto;
  overflow: hidden;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const AboutmeTextContainer = styled.div`
  padding: 2rem;
  background-color: rgba(5, 50, 32, 0.75);
  border-radius: 1rem;
  width: fit-content;
  max-width: 100vw;

  @media (max-width: 500px) {
    max-width: 100vw;
    margin: 2rem auto 0 auto;
    padding: 1rem 1.5rem;
  }
`;

export const AboutmeText = styled.p`
  color: #d1d1d1;
  font-size: 1.2rem;
  line-height: 1.6;

  @media (max-width: 500px) {
    font-size: 1rem;
    line-height: 1.3;
  }
`;

export const AboutmeTitle = styled.h3`
  font-size: 2.5rem;
`;

export const AboutmeImageContainer = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  border-radius: 0.7rem;
  background-image: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;
