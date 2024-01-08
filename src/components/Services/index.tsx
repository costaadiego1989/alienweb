import { CallToAction } from '../CallToAction';
import { Service, ServiceTitle, ServicesContainer, ServicesContentContainer } from './Services'
import { ServicesList } from './mock';

export const Services: React.FC = () => {
    return (<>
        <ServicesContainer>
            <ServiceTitle>Soluçoes</ServiceTitle>
            <ServicesContentContainer>
              {ServicesList.map((service, index) => {
                return (<>
                    <Service key={index}>
                        <service.icon />
                        <h3>{service.name}</h3>
                        <h5>{service.description}</h5>
                    </Service>
                </>);
              })}  
            </ServicesContentContainer>
            <CallToAction title="Vamos conhecer um pouco mais sobre nosso serviços" button="Vamos bater um papo!" />
        </ServicesContainer>
    </>)
}