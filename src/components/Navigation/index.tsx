import { NavigationContainer, Logo, Menu, CVBtn, Link as Linked } from "./Navigation";
import { Download, FinnTheHuman } from "phosphor-react";

import pdfFile from '../../assets/archieves/cv_diego_costa.pdf'

import { Link } from 'react-scroll';
import { useEffect } from "react";

interface IMenuItensProps {
  index: string;
  title: string;
  url: string;
}

export const Navigation: React.FC = () => {

  const menuItens: IMenuItensProps[] = [
    { index: "I", title: "Sobre", url: 'about' },
    { index: "II", title: "Portfólio", url: 'portfolio' },
    { index: "III", title: "Experiência", url: 'experiency' },
    { index: "VI", title: "Contato", url: 'contact' },
  ];

  const handleCVDonwload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'arquivo.pdf';
    link.click();
  };

  useEffect(() => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add('sticky');
        console.log(header);
        
      } else {
        header?.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavigationContainer id="header">
      <Logo>
        <FinnTheHuman size={46} color="#053220" />
      </Logo>
      <nav>
        <Menu>
          {menuItens.map(menuItem => {
            return (<>
              <Link
                activeClass="active"
                to={menuItem.url}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Linked>{menuItem.index} {menuItem.title}</Linked>
              </Link>
            </>)
          })}
        <li onClick={handleCVDonwload}>
          <CVBtn><Download color="#fff" size={20}></Download>Meu CV</CVBtn>
        </li>
      </Menu>
    </nav>
    </NavigationContainer >
  );
};
