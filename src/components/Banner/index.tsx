import {
  Envelope,
  FacebookLogo,
  GithubLogo,
  IconProps,
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
} from "./Banner";

interface ISocialMediaIConProps {
  title: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const Header: React.FC = () => {
  const socialMedia: ISocialMediaIConProps[] = [
    { title: "Facebook", icon: FacebookLogo },
    { title: "Github", icon: GithubLogo },
    { title: "Instagram", icon: InstagramLogo },
    { title: "Linkedin", icon: LinkedinLogo },
    { title: "Whatsapp", icon: WhatsappLogo },
    { title: "Envelope", icon: Envelope },
  ];

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
          {socialMedia.map((sm) => {
            const IconComponent = sm.icon;
            return (
              <SocialMediaIcon>
                <IconComponent key={sm.title} size={24} color="#fff" />
              </SocialMediaIcon>
            );
          })}
      </SocialMedia>
    </Banner>
  );
};
