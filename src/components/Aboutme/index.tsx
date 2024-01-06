import {
  AboutmeContainer,
  AboutmeContent,
  AboutmeTextContainer,
  AboutmeImageContainer,
  AboutmeText,
  AboutmeTitle,
} from "./Aboutme";
import AboutmePhoto from "../../assets/images/aboutme.png";

export const Aboutme = () => {
  return (
    <AboutmeContainer>

      <AboutmeContent>

        <AboutmeTextContainer>

          <AboutmeText>

            <AboutmeTitle>Quem sou</AboutmeTitle>

            <p>
              Olá, sou um desenvolvedor Full Stack apaixonado por tecnologia,
              videogames, extraterrestres e tudo relacionado ao espaço. Tenho 1
              ano e meio de experiência como Supervisor de Marketing em uma
              multinacional e mais 6 anos como contratado PJ. Já atuei como desenvolvedor
              Full Stack, onde pude aprimorar minhas habilidades em diversas
              tecnologias e ferramentas. Além disso, sou pai de um filho
              maravilhoso que é minha maior inspiração para continuar me
              desenvolvendo como profissional e pessoa. Estou sempre em busca de
              novos desafios e oportunidades para crescer como desenvolvedor e
              cidadão do universo.
            </p>

          </AboutmeText>

        </AboutmeTextContainer>

        <AboutmeImageContainer>

          <img src={AboutmePhoto} alt="Um astronauta em um espaço surrealista todo em verde." />
        
        </AboutmeImageContainer>

      </AboutmeContent>

    </AboutmeContainer>
  );
};
