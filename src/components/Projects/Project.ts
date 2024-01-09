import styled from "styled-components";

export const ProjectsContainer = styled.section`
    width: 100vw;
    background-color: #1B1B1B;
    padding-bottom: 4rem;
    border-top: 2px solid #1fdf64;
`;

export const ProjectsContentContainer = styled.section`
    width: 91vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: auto;
    margin: 0 auto;
    gap: 1rem;
`;

export const ProjectTitle = styled.h3`
    color: #9d9d9d;
    display: flex !important;
    justify-content: center !important;
    padding: 4rem;
    font-size: 2.5rem;
`;

export const ProjectContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1.5rem;
    padding-bottom: 4rem;

    @media (max-width: 500px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
      }
`;

export const Project = styled.li`
    background-color: #1fdf64 !important;
    border: 3px solid #1fdf64;
    border-radius: 0.5rem;
    transition: .5s;
    cursor: pointer;

    img {
        height: auto;
        max-height: 200px;
        border-bottom: 2px solid #393836;
    }

    h3 {
        padding: 1rem 0 0 1.5rem;
        display: flex;
        gap: .5rem;
        align-items: center;  
    }

    h5 {
        padding: .5rem 0 1.5rem 1.5rem;
        font-size: 1rem;  
        display: flex;
        gap: .5rem;
        align-items: center;  
    }

    :hover {
        transform: translate(0px, -10px);
    }
`;