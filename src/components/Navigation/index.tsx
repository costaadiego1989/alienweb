import { NavigationContainer, Logo, Menu, CVBtn, Link } from "./Navigation";
import { Download, FinnTheHuman } from "phosphor-react";

interface IMenuItensProps {
  index: string;
  title: string;
}

export const Navigation: React.FC = () => {

  const menuItens: IMenuItensProps[] = [
    { index: "1", title: "Sobre" },
    { index: "2", title: "Experiência" },
    { index: "3", title: "Portfólio" },
    { index: "4", title: "Contato" },
  ];

  return (
    <NavigationContainer>
      <Logo>
        <FinnTheHuman size={46} color="#053220" />
      </Logo>
      <nav>
        <Menu>
          {menuItens.map(menuItem => {
            return(<>
              <Link>{menuItem.index}. {menuItem.title}</Link>
            </>)
          })}
          <li>
            <CVBtn><Download color="#fff" size={20}></Download>Meu CV</CVBtn>
          </li>
        </Menu>
      </nav>
    </NavigationContainer>
  );
};
