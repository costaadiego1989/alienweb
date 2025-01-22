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
    <AboutmeContainer className="about">

      <AboutmeContent>

        <AboutmeTextContainer>

          <AboutmeText>

            <AboutmeTitle>Quem sou</AboutmeTitle>

            <p>

Atualmente, estou me especializando em Blockchain, com foco em desenvolvimento de Smart Contracts usando Solidity. Desde que comecei a estudar tecnologias descentralizadas, tenho dedicado meu tempo à criação de soluções inovadoras que aproveitam o potencial da Web3, visando construir projetos seguros e escaláveis em plataformas EVM.
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
