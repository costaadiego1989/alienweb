import { Header } from "../../components/Banner";
import { Navigation } from "../../components/Navigation";
import { Technologies } from "../../components/Technologies";
import { Aboutme } from "../../components/Aboutme";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Technologies />
      <Aboutme />
    </>
  );
};
