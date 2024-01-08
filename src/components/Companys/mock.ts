import BarraForte from "../../assets/images/companys/Barra-Forte.png"
import Btk from "../../assets/images/companys/Btk.png"
import Climes from "../../assets/images/companys/Climes.png"
import MandaBrasa from "../../assets/images/companys/manda-brasa.png"
import News from "../../assets/images/companys/news.png"
import Ortrafisio from "../../assets/images/companys/Ortrafisio.png"
import Vagner from "../../assets/images/companys/vagner.png"


interface ICompanys {
    id: number;
    imageUrl: string;
    name: string;
}

export const logos: ICompanys[] = [
    { id: 1, imageUrl: BarraForte, name: 'BarraForte' },
    { id: 2, imageUrl: Btk, name: 'Btk' },
    { id: 4, imageUrl: Climes, name: 'Climes' },
    { id: 5, imageUrl: MandaBrasa, name: 'MandaBrasa' },
    { id: 6, imageUrl: News, name: 'News' },
    { id: 7, imageUrl: Ortrafisio, name: 'Ortrafisio' },
    { id: 8, imageUrl: Vagner, name: 'Vagner' },
  ];