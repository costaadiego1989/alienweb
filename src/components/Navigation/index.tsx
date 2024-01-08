import { NavigationContainer, Logo, Menu, CVBtn, Link } from "./Navigation";
import { Download, FinnTheHuman } from "phosphor-react";

import pdfFile from '../../assets/archieves/cv_diego_costa.pdf'

interface IMenuItensProps {
  index: string;
  title: string;
  url: string;
}

export const Navigation: React.FC = () => {

  const menuItens: IMenuItensProps[] = [
    { index: "1", title: "Sobre", url: '#about' },
    { index: "3", title: "Portfólio", url: '#portfolio' },
    { index: "2", title: "Experiência", url: '#experiency' },
    { index: "4", title: "Contato", url: '#contact' },
  ];

  const handleCVDonwload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'arquivo.pdf';
    link.click();
  };

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
          <li onClick={handleCVDonwload}>
            <CVBtn><Download color="#fff" size={20}></Download>Meu CV</CVBtn>
          </li>
        </Menu>
      </nav>
    </NavigationContainer>
  );
};
