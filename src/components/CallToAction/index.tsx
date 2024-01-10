import { CallToActionContent } from './CallToAction'

interface ICallToAction {
    title: string;
    button: string;
    url: string;
}

export const CallToAction: React.FC<ICallToAction> = ({ title, button, url }) => {
    return (<>
        <CallToActionContent>
            <h2>{title}</h2>
            <a href={url} target='_blank'><button>{button}</button></a>
            <span>☝️</span>
        </CallToActionContent>
    </>);
}