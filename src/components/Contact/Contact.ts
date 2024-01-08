import styled from "styled-components";

export const ContactContainer = styled.section`
    width: 100vw;
    background-color: #1B1B1B;
    border-top: 2px solid #1fdf64;

    h3 {
        font-size: 4rem;
    }

    h5 {
        text-align: center;
    }
`;

export const ContactContentContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const LeftContent = styled.section`
    width: 50vw;
    background-color: #1fdf64;
    padding: 4rem 4rem 6rem 4rem;
    text-align: center;
`;

export const RightContent = styled.section`
    width: 50vw;
    background-color: #1b1b1b;
    padding: 4rem 4rem 6rem 4rem;
    text-align: center;
    color: #f9f9f9;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: #f9f9f9;
    }
`;

export const ClickHere = styled.span`
  @keyframes toLeft {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  width: 60px;
  font-size: 2rem;
  position: relative;
  animation-name: toLeft;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;