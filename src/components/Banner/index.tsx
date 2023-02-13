import { Banner, Welcome, WelcomeContainer } from "./Banner";

export const Header = () => {
  return (
    <Banner>
      <WelcomeContainer>
        <Welcome id="element">&#9996;</Welcome>
        <p>Olá, eu sou o Diego!</p>
      </WelcomeContainer>
    </Banner>
  );
};
