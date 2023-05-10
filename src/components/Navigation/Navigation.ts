import styled from "styled-components";

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1fdf64;
  padding: 1rem 4rem;
  border-bottom: 2px solid #063823;

  @media (max-width: 500px) {
    width: 100vw;
    overflow: hidden;
    justify-content: space-between;
    padding: .5rem .5rem .3rem .75rem;
    position: fixed;
    z-index: 999;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;

  @media (max-width: 500px) {
    text-align: right;
    gap: .5rem;
    justify-items: flex-end;
  }
`;

export const Link = styled.li`
  transition: 0.5s;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column !important;
    font-size: 1rem;
    line-height: 0.8;
  }

  &:hover {
    border-bottom: 2px solid rgb(5, 50, 32);
  }
`;

export const CVBtn = styled.div`
  border: 2px solid transparent;
  background-color: #272727;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: 0.5s;
  font-size: 1.5rem;

  @media (max-width: 500px) {
    padding: 0.5rem 0.75rem;
    text-align: center;
    position: fixed;
    border-radius: 0px;
    top: 3.8rem;
    left: 0;
    width: 100%;
    z-index: 999;
    font-size: 1rem;
  }

  &:hover {
    border: 2px solid #272727;
    color: #fff;
    background: none;
  }
`;
