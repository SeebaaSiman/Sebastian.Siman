import styled from "styled-components";

export const Navigation = styled.div`
  position: relative;
  width: 400px;
    height: 60px;
  background-color: rgb(0,0,0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  /* box-shadow */

  ul {
    display: flex;
    width: 350px;
    text-transform: capitalize;
  }

  ul li {
    position: relative;
    list-style: none;
    width: 80px;
    height: 60px;
    z-index: 2;
  }

  ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  ul li a .icon {
    color: #fff;
    position: relative;
    display: block;
    line-height: 65px;
    font-size: 1.5em;
    transition: 0.5s;
  }

  ul li.active a .icon {
    transform: translateY(-30px);
    color: #b3ff00;
  }

  ul li a .text {
    position: absolute;
    background-color: #b3ff00;
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    transform: translateY(15px);
    padding: 2px 7px;
    border-radius: 12px;
    text-transform: uppercase;
    color: rgb(0,0,0);
    opacity: 0;
  }

  ul li.active a .text {
    transform: translateY(-4px);
    opacity: 1;
  }

  .indicator {
    position: absolute;
    background:rgb(0,0,0);
    width: 70px;
    height: 70px;
    top: -35px;
    border-radius: 50%;
    z-index: 1;
    transition: 0.5s;
  }

  .indicator::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 15px 18px #ffff;
    left: -28px;
    top: 5px;
  }

  .indicator::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -15px 18px #ffff;
    right: -28px;
    top: 5px;
  }

  ul li:nth-child(1).active ~ .indicator {
    transform: translateX(calc(70px * 0));
  }

  ul li:nth-child(2).active ~ .indicator {
    transform: translateX(calc(70px * 1));
  }

  ul li:nth-child(3).active ~ .indicator {
    transform: translateX(calc(70px * 2));
  }

  ul li:nth-child(4).active ~ .indicator {
    transform: translateX(calc(70px * 3));
  }

  ul li:nth-child(5).active ~ .indicator {
    transform: translateX(calc(70px * 4));
  }
`;
