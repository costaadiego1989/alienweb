import { CallToActionContent } from './CallToAction'

interface ICallToAction {
    title: string;
    button: string;
}

export const CallToAction: React.FC<ICallToAction> = ({ title, button }) => {
    return (<>
        <CallToActionContent>
            <h2>{title}</h2>
            <button>{button}</button>
            <span>☝️</span>
        </CallToActionContent>
    </>);
}