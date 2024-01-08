import { MdOutlineWeb } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { SiGooglemybusiness } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdAppRegistration } from "react-icons/md";

interface IServices {
    icon: React.ComponentType;
    name: string;
    description: string;
}

export const ServicesList: IServices[] = [
    {
        icon: MdOutlineWeb,
        name: 'Web Design',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes com custo benefício.',
    },
    {
        icon: MdAppSettingsAlt,
        name: 'App Development',
        description: 'Nós criamos seu app com a cara do seu negócio. Utilizando de ferramentas low code, entregamos seu projeto em tempo recorde.',
    },
    {
        icon: MdDesignServices,
        name: 'Graphic Design',
        description: 'Nosso Design Think está tão fora da caixinha que foi parar no multiverso e de lá trazemos ideias únicas para compor peças gráficas.',
    },
    {
        icon: IoMdAnalytics,
        name: 'SEO',
        description: 'Analizamos seu site em busca das melhores palavras chaves e adotamos estratégias de copy para SEO, gerando ainda mais tráfego orgânico.',
    },
    {
        icon: SiGooglemybusiness,
        name: 'Marketing Digital',
        description: 'Montamos estratégias para lançar seu produto ou elaboramos planos de ação para desenvolver seu negócio até os confins.',
    },
    {
        icon: MdAnalytics,
        name: 'Tráfego Pago',
        description: 'Seu budget é levado a sério, portanto só adotamos estratégias certeiras de tráfego pago para que o retorno sobre o investimento seja um tiro certeiro.',
    },
    {
        icon: HiPresentationChartBar,
        name: 'Apresentações',
        description: 'Seu negócio precisa de uma apresentação impactante? Deixe conosco. Lhe entregaremos um material capaz de passar emoção ao seu cliente.',
    },
    {
        icon: MdAppRegistration,
        name: 'Low Code',
        description: 'Nós pensamos e trabalhamos a frente de nosso tempo. Usamos ferramentas low code e AI para criar soluções personalizadas e únicas.',
    },
];