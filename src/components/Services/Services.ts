import styled from "styled-components";

export const ServicesContainer = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  z-index: -2;
  background-color: #1b1b1b;
  border-top: 2px solid #1fdf64;

  @media (max-width: 500px) {
    padding: 2rem;
  }

  h3 {
    text-align: center;
    font-size: 1.725rem;
    margin-bottom: 3rem;
    margin-top: .5rem;
    color: #1b1b1b;

    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
  }
`;

export const ServicesContentContainer = styled.ul`
    max-width: 80vw;
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(4, 1fr);
    background-color: #1fdf64 !important;
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 2rem;

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 1rem;
    }
`;

export const Service = styled.li`
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 4rem;
    color: #063823;

    h3 {
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 1rem;
        color: #1b1b1b;
    }
`;

export const ServiceTitle = styled.h3`
    color: #9d9d9d !important;
    display: flex !important;
    justify-content: center !important;
    font-size: 2.5rem !important;
`;
