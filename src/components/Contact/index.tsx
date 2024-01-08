import { ClickHere, ContactContainer, ContactContentContainer, LeftContent, RightContent } from "./Contact";

export const Contact: React.FC = () => {
    return (<>
        <ContactContainer className="contact">
            <ContactContentContainer>
                <LeftContent>
                    <h3>Fale conosco</h3>
                </LeftContent>
                <RightContent>
                    <ClickHere>👉</ClickHere><h3><a href="https://wa.me/5521993001883" target="_blank">Clique aqui</a></h3>
                </RightContent>
            </ContactContentContainer>
                <h5>Acompanhe-nos no Linkedin</h5>
        </ContactContainer>
    </>);
}