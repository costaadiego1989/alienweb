import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiDocker } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

import {
  Technologie,
  TechnologiesContainer,
  TechnologiesContent,
  TechnologieTitle,
} from "./Technologies";

interface ITechnologiesProps {
  title: string;
  icon: React.ReactNode;
}

export const Technologies: React.FC = () => {

  const technologiesList: ITechnologiesProps[] = [
    { title: "Javascript", icon: <DiJavascript1 /> },
    { title: "React JS", icon: <FaReact /> },
    { title: "Node JS", icon: <SiNodedotjs /> },
    { title: "Typescript", icon: <SiTypescript /> },
    { title: "Github", icon: <FiGithub /> },
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "MySQL", icon: <GrMysql /> },
    { title: "AWS", icon: <FaAws /> },
    { title: "Docker", icon: <DiDocker /> },
    { title: "Vue JS", icon: <FaVuejs /> },
  ];

  return (
    <TechnologiesContainer>
      <TechnologieTitle>Tecnologias</TechnologieTitle>
      <TechnologiesContent>
        {technologiesList.map((technologie: ITechnologiesProps): React.ReactElement => {
          return (
            <Technologie>
              {technologie.icon}
              {technologie.title}
            </Technologie>
          );
        })}
      </TechnologiesContent>
    </TechnologiesContainer>
  );
};
