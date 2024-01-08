import styled from "styled-components";

export const TechnologiesContainer = styled.section`
    width: 100vw;
    background-color: #1B1B1B;
    padding-bottom: 4rem;
`;

export const TechnologiesContent = styled.ul`
    max-width: 80vw;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
    background-color: #1fdf64 !important;
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 2rem;

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 1rem;
    }
`;

export const TechnologieTitle = styled.h3`
    color: #9d9d9d;
    display: flex !important;
    justify-content: center !important;
    padding: 4rem;
    font-size: 2.5rem;
`;

export const Technologie = styled.li`
    list-style: none;
    color: #9d9d9d;
    border-radius: 0.5rem;
    padding: 1rem;
    background: #272727;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: .5s;
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 1rem;
        padding: .5rem;
    }

    &:hover {
        color: #1fdf64;
        transform: translate(0px, -10px);
    }
`;