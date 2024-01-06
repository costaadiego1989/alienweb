import styled from "styled-components";

export const ProjectsContainer = styled.section`
    width: 100vw;
    background-color: #1B1B1B;
    padding-bottom: 4rem;
`;

export const ProjectsContentContainer = styled.section`
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: auto;
    margin: 0 auto;
    gap: 1rem;
`;

export const Project = styled.ul`
    background-color: #1fdf64 !important;
    padding: 2rem;

    @media (max-width: 500px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
      }
`;