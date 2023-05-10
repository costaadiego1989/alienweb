import { NavigationContainer, Logo, Menu, CVBtn, Link } from "./Navigation";
import { Download, FinnTheHuman } from "phosphor-react";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Logo>
        <FinnTheHuman size={46} color="#053220" />
      </Logo>
      <nav>
        <Menu>
          <Link>01. Sobre</Link>
          <Link>02. Experiência</Link>
          <Link>03. Portfólio</Link>
          <Link>04. Contato</Link>
          <li>
            <CVBtn><Download color="#fff" size={20}></Download>Meu CV</CVBtn>
          </li>
        </Menu>
      </nav>
    </NavigationContainer>
  );
};
