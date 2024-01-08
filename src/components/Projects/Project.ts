import styled from "styled-components";

export const ProjectsContainer = styled.section`
    width: 100vw;
    background-color: #1B1B1B;
    padding-bottom: 4rem;
`;

export const ProjectsContentContainer = styled.section`
    width: 90vw;
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

export const CallToAction = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    gap: 1.5rem;
    align-items: center;
    margin: 0 auto;

    h3 {
        color: #f0f0f0;
        font-size: 2rem;
    }

    @media (max-width: 500px) {
        h3 {
            font-size: 1.5rem;
            text-align: center;
        }
      }

    button {
        width: 250px;
        font-size: 1.2rem;
        padding: 1rem 0;
        border-radius: 6px;
        cursor: pointer;
        background-color: #1fdf64;
        border: none;
        transition: .5s;
        border: 2px solid transparent;

        :hover {
            transform: translate(0px, -10px);
            border: 2px solid #063823;
        }
    }

    @keyframes subir-descer {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0);
        }
      }

    span {
        font-size: 2rem;
        animation: subir-descer 2s infinite;
    }
`;