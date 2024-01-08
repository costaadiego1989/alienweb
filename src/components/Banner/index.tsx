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
  TextAndSocialsContainer,
  BannerText,
  BannerTitleContrast,
  SocialMedia,
  SocialMediaIcon,
} from "./Banner";

interface ISocialMediaIConProps {
  title: string;
  icon: React.ReactNode;
  url: string;
}

export const Header: React.FC = () => {

  const socialMedia: ISocialMediaIConProps[] = [
    { title: "Github", icon: <GithubLogo />, url: 'https://' },
    { title: "Instagram", icon: <InstagramLogo />, url: 'https://' },
    { title: "Linkedin", icon: <LinkedinLogo />, url: 'https://' },
    { title: "Whatsapp", icon: <WhatsappLogo />, url: 'https://' },
    { title: "Envelope", icon: <Envelope />, url: 'mailto:agenciaalienweb@gmail.com' },
  ];

  return (
    <Banner>
      <WelcomeContainer>
        <Welcome>✌️</Welcome>
        <Saudation>SAUDAÇÕES HUMANO! ME CHAMO DIEGO COSTA.</Saudation>
      </WelcomeContainer>

      <BannerTitle>
        Sou o CTO da <BannerTitleContrast>Alienweb</BannerTitleContrast>{" "}
        estou em constante <BannerTitleContrast>aprendizado</BannerTitleContrast>{" "}
        e <BannerTitleContrast>metamorfose</BannerTitleContrast>.
      </BannerTitle>

      <TextAndSocialsContainer>
      <BannerTextContainer>
        <BannerText>
          <p>
            Sou um ser viajante que navega pelo espaço em busca de novas aventuras
            e desafios. Meus conhecimentos como desenvolvedor Full Stack React e
            Node.js com TypeScript são minhas principais ferramentas nesta
            jornada. Aqui você poderá conhecer sobre mim e meus projetos
            interestelares. Fique à vontade para explorar este cantinho do
            universo e quem sabe, juntos, podemos criar algo incrível!
          </p>
        </BannerText>
      </BannerTextContainer>

      <SocialMedia>
          {socialMedia.map((sm: ISocialMediaIConProps): React.ReactElement => {
            return (
              <SocialMediaIcon key={sm.title}>
                {sm.icon}
              </SocialMediaIcon>
            );
          })}
      </SocialMedia>
      </TextAndSocialsContainer>
    </Banner>
  );
};
