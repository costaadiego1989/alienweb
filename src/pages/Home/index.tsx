import { Header } from "../../components/Banner";
import { Navigation } from "../../components/Navigation";
import { Technologies } from "../../components/Technologies";
import { Aboutme } from "../../components/Aboutme";
import { Projects } from "../../components/Projects";
import { Companys } from "../../components/Companys";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Technologies />
      <Aboutme />
      <Projects />
      <Companys />
    </>
  );
};
