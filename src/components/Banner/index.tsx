import {
  Envelope,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import {
  Banner,
  Welcome,
  WelcomeContainer,
  BannerTitle,
  Saudation,
  BannerTextContainer,
  BannerText,
  BannerTitleContrast,
  SocialMedia,
  SocialMediaIcon,
  Line,
} from "./Banner";

export const Header = () => {
  return (
    <Banner>
      <WelcomeContainer>
        <Welcome>👽</Welcome>
        <Saudation>SAUDAÇÕES HUMANO... EU DIEGO COSTA!</Saudation>
      </WelcomeContainer>

      <BannerTitle>
        Um desenvolvedor <BannerTitleContrast>full stack</BannerTitleContrast>{" "}
        em constante <BannerTitleContrast>aprendizado</BannerTitleContrast> e
        constante <BannerTitleContrast>metamorfose</BannerTitleContrast>.
      </BannerTitle>

      <BannerTextContainer>
        <BannerText>
          <p>
            Sou um alienígena que viaja pelo espaço em busca de novas aventuras
            e desafios. Meus conhecimentos como desenvolvedor Full Stack React e
            Node.js com TypeScript são minhas principais ferramentas nesta
            jornada. Aqui você poderá conhecer sobre mim e meus projetos
            interestelares. Fique à vontade para explorar este cantinho do
            universo e quem sabe, juntos, podemos criar algo incrível!
          </p>
        </BannerText>
      </BannerTextContainer>

      <SocialMedia>
        <SocialMediaIcon>
          <FacebookLogo size={32} color="#fff" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <InstagramLogo size={32} color="#fff" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <LinkedinLogo size={32} color="#fff" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <GithubLogo size={32} color="#fff" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <WhatsappLogo size={32} color="#fff" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <Envelope size={32} color="#fff" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <Line>_________</Line>
        </SocialMediaIcon>
      </SocialMedia>
    </Banner>
  );
};
