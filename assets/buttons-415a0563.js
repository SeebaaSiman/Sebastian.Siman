import{d as o}from"./index-a383438f.js";import{d as n,e}from"./animations-d7bb6466.js";const s=o.a`
font-family: "Bebas Neue", sans-serif;
  appearance: none;
  border: none;
  text-decoration: none;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);

  color: white;
  background-color: transparent;
  filter: drop-shadow(1px 1px 1px black);
  transition: color 0.8s;
  font-size: 1rem;
  animation: ${n} 0.5s ease-in-out forwards;
  cursor: none;
  @media (min-width: 500px) {
    font-size: 1.2rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #8888;
    border-radius: 4px;
    scale: 0;
    transform-origin: left;
    transition: scale 0.8s;
  }
  &:hover {
    color: #8888;
  }
  &:hover::before {
    scale: 1;
  }
`,p=o.a`
  cursor: none;
  /* top: 15px; */
  font-family: "Bebas Neue", sans-serif;
  font-size: 14px;
  z-index: 50;
  background-color: transparent;
  border: 1px solid #111;
  border-radius: 0;
  box-sizing: border-box;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 10px 15px;
  border-radius: 0px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: ${t=>t.theme.transition};
  user-select: none;
  &::before {
    content: " ";
    rotate: 90deg;
    width: 1rem;
    height: 2px;
    background: #fff;
    top: 45%;
    left: 1.1em;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: ${t=>t.theme.transition};
  }

  & .text {
    font-size: 16px;
    font-weight: 400;
    padding-left: 1.5em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    transition: ${t=>t.theme.transition};
  }

  & .top-key {
    height: 1.3px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #fff;
    transition: ${t=>t.theme.transition};
  }

  & .bottom-key-1 {
    height: 1.3px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #fff;
    transition: ${t=>t.theme.transition};
  }

  & .bottom-key-2 {
    height: 1.3px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #fff;
    transition: ${t=>t.theme.transition};
  }

  &:hover {
    color: black;
    background: white;
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.8);
    transition: ${t=>t.theme.transition};
  }

  &:hover::before {
    rotate: 0deg;
    top: 50%;

    width: 0.3375rem;
    background: black;
    transition: ${t=>t.theme.transition};
  }

  &:hover .text {
    color: black;
    padding-left: 1em;
    transition: ${t=>t.theme.transition};
  }

  &:hover .top-key {
    left: -2px;
    width: 0px;
    transition: ${t=>t.theme.transition};
  }

  &:hover .bottom-key-1,
  &:hover .bottom-key-2 {
    right: 0;
    width: 0;
    transition: ${t=>t.theme.transition};
  }
  &:active {
    scale: 0.96;
    transition: ${t=>t.theme.transition};
  }
`,r=o.button`
     position: absolute;
  left: 50%;
  border: none;
  appearance: none;
  background-color: transparent;
  z-index: 50;
  cursor:none;
  transform: translate(-50%, -50%);
    transition: all 0.2s cubic-bezier(0.48, 0.89, 0.35, 1);
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.9;
  }
  &:not(:hover) {
animation:${e} 2s cubic-bezier(0.48, 0.89, 0.35, 1) infinite;
  }
  &:not(:active) {
animation:${e} 2s cubic-bezier(0.48, 0.89, 0.35, 1) infinite;
  }
   `;o(r)`
position:relative;
`;export{s as B,r as a,p as b};
