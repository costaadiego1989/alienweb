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

            Com mais de 2 anos de experiência como Supervisor de Marketing, onde liderei projetos de lançamento de produtos no mercado cosmético, desenvolvi habilidades de liderança e gestão de projetos. Essa experiência me preparou para assumir riscos e buscar inovação, o que me levou a uma nova paixão: o desenvolvimento web para Blockchain.

Atualmente, estou me especializando em Blockchain, com foco em desenvolvimento de Smart Contracts usando Solidity. Desde que comecei a estudar tecnologias descentralizadas, tenho dedicado meu tempo à criação de soluções inovadoras que aproveitam o potencial da Web3, visando construir projetos seguros e escaláveis em plataformas EVM.

Meu objetivo é aplicar esse conhecimento em projetos que explorem o potencial dos ativos reais tokenizados (RWA), especialmente em setores como o agro, e contribuir com soluções que expandam o acesso ao mercado de investimentos.
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
