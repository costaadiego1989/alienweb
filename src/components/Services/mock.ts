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
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
    {
        icon: MdAppSettingsAlt,
        name: 'App Development',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
    {
        icon: MdDesignServices,
        name: 'Graphic Design',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
    {
        icon: IoMdAnalytics,
        name: 'SEO',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
    {
        icon: SiGooglemybusiness,
        name: 'Marketing Digital',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
    {
        icon: MdAnalytics,
        name: 'Tráfego Pago',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
    {
        icon: HiPresentationChartBar,
        name: 'Apresentações',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
    {
        icon: MdAppRegistration,
        name: 'Low Code',
        description: 'Nós criamos a web do amanhã. Tenha um site a frente da nossa época e tenha maior engajamento com seus clientes.',
    },
];