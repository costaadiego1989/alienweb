import styled from "styled-components";
import SpaceBackground from "../../assets/images/space-background.png";

export const Banner = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 4rem;
  background: url(${SpaceBackground}) no-repeat fixed 83%;
  background-size: cover;
  border-bottom: 2px solid #1fdf64;

  @media (max-width: 500px) {
    margin-top: 6.3rem;
    padding: 2rem;
  }
`;

export const WelcomeContainer = styled.span`
  background-color: rgba(121, 182, 99, 0.8);
  opacity: 0.7;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  max-width: 23rem;
  color: #1b1b1b;

  @media (max-width: 500px) {
    margin-top: 1.5rem;
  }
`;

export const Welcome = styled.span`
  @keyframes toLeft {
    from {
      left: 0px;
    }
    to {
      left: 10px;
    }
  }

  width: 60px;
  font-size: 2rem;
  position: relative;
  animation-name: toLeft;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export const BannerTitle = styled.h2`
  color: #d1d1d1;
  max-width: 21ch;
  margin-top: 2rem;
  font-size: 2.5rem;

  @media (max-width: 500px) {
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const Saudation = styled.h3`
  font-size: 1.75rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const BannerTitleContrast = styled.span`
  color: #f7d213;
`;

export const TextAndSocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

export const BannerTextContainer = styled.div`
  padding: 2rem;
  background-color: rgba(5, 50, 32, 0.75);
  border-radius: 1rem;
  margin: 1.5rem 4rem 0 0;
  width: fit-content;
  max-width: 37vw;

  @media (max-width: 500px) {
    max-width: 1100px !important;
    margin: 2rem auto 0 auto;
    padding: 1rem 1.5rem;
  }
`;

export const BannerText = styled.p`
  color: #d1d1d1;
  font-size: 1.2rem;
  line-height: 1.6;

  @media (max-width: 500px) {
    font-size: 1rem;
    line-height: 1.3;
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  gap: 2.5rem;
  padding-top: .65rem;
  background-color: #063823;
  z-index: 999;

  @media (max-width: 500px) {
    gap: 1.5rem;
  }
`;

export const SocialMediaIcon = styled.li`
  transition: 0.5s;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #1fdf64 !important;
    transform: translate(0px, -10px);
  }
`;
