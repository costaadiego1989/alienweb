import styled from "styled-components";

export const CallToActionContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    gap: 1.5rem;
    align-items: center;
    margin: 0 auto;

    h2 {
        color: #f9f9f9 !important;
        font-size: 2rem;
    }

    @media (max-width: 500px) {
        h2 {
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