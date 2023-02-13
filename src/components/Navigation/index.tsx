import { NavigationContainer, Logo, Menu } from "./Navigation";
import { FinnTheHuman, List } from "phosphor-react";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Logo>
        <FinnTheHuman size={46} color="#000" />
      </Logo>
      <Menu>
        <List size={46} color="#000" />
      </Menu>
    </NavigationContainer>
  );
};
