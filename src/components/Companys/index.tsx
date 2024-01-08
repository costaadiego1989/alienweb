import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CompanyContainer } from './Company'
import { logos } from './mock'

export const Companys: React.FC = () => {

    const settings = {
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const mobileSettings = {
        ...settings,
        slidesToShow: 2
    };

    return (<>
        <CompanyContainer>
            <h3>Empresas que já passaram por aqui</h3>
            {window.innerWidth > 500 ? <Slider {...settings}>
                {logos.map((logo) => (
                    <div key={logo.id}>
                        <img src={logo.imageUrl} alt="Logo do Cliente" />
                    </div>
                ))}
            </Slider>
                :
                <Slider {...mobileSettings}>
                    {logos.map((logo) => (
                        <div key={logo.id}>
                            <img src={logo.imageUrl} alt="Logo do Cliente" />
                        </div>
                    ))}
                </Slider>

            }
        </CompanyContainer>
    </>);
}