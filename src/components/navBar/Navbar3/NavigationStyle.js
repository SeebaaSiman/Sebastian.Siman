import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222327;
  min-height: 100vh;
`;

export const Navigation = styled.nav`
  width: 450px;
  height: 80px;
  position: relative;
  background: #2f2f2f;
  display: flex;
  justify-content: center;
  z-index: 1;
  border-radius: 10px;
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  width: 400px;
  z-index: 1000;
  z-index: 1000;
`;

export const NavItem = styled.li`
  position: relative;
  list-style: none;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

export const NavLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;

  .icon {
    position: relative;
    display: block;
    line-height: 85px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.5);
  }

  &:hover .icon {
    color: rgba(255, 255, 255, 1);
  }

  &.active .icon {
    transform: translateY(-8px);
    color: #29fd53;
  }

  .text {
    position: absolute;
    opacity: 0;
    font-weight: 400;
    font-size: 0.6em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    color: #222327;
    text-transform: uppercase;
    font-weight: 600;
    transform: translateY(0px);
  }

  &.active .text {
    transform: translateY(16px);
    opacity: 1;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    bottom: 14px;
    width: 80%;
    height: 16px;
    background: #29fd53;
    border-radius: 10px;
  }
`;

export const IndicatorTwo = styled(Indicator)`
  transform: translateX(calc(80px * 1));
`;

export const IndicatorThree = styled(Indicator)`
  transform: translateX(calc(80px * 2));
`;

export const IndicatorFour = styled(Indicator)`
  transform: translateX(calc(80px * 3));
`;

export const IndicatorFive = styled(Indicator)`
  transform: translateX(calc(80px * 4));
`;
