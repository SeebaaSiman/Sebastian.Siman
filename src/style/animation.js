import { keyframes } from "styled-components";
//Loader
export const rotate = keyframes`
      0% {
        transform: scale(1) rotate(0);
      }
      50% {
        transform: scale(1.5) rotate(360deg);
      }
      80% {
        transform: scale(1) rotate(720deg);
      }
      100% {
        /* opacity: 0; */
        transform: scale(0) rotate(1080deg);
      }
  `;
export const sweep = keyframes`
     0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  33% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 0 0, 0% 100%, 0% 100%);
  }
  `;

// page 1
export const showInRight = keyframes`
from {
opacity:1;
  transform: translateX(100%);

}
to {
opacity:1;
  transform: translateX(0%);
  }
    `;
//page 2
export const scaleUpTopLeft = keyframes`
0% { transform: translateX(-48px); animation-timing-function: ease-in; opacity: 1; }
24% { opacity: 1; }
40% { transform: translateX(-26px); animation-timing-function: ease-in; }
65% { transform: translateX(-13px); animation-timing-function: ease-in; }
82% { transform: translateX(-6.5px); animation-timing-function: ease-in; }
93% { transform: translateX(-4px); animation-timing-function: ease-in; }
25%, 55%, 75%, 87%, 98% { transform: translateX(0); animation-timing-function: ease-out; }
100% { transform: translateX(0); animation-timing-function: ease-out; opacity: 1; }`;

//page 3
export const bounceLeft = keyframes`
0%{transform:scale(.5);opacity:1;transform-origin:top left}
100%{transform:scale(1);opacity:1;transform-origin:top left}`;
//page 4
export const bounceIn = keyframes`
0% {
  transform: scale(0.8);
 opacity: 0;
}
60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
  `;
// TextChange (page1)
export const showInLeft = keyframes`
  0%{opacity:1;
  transform: translateX(-12%)}
  25%{opacity:1;
  transform: translateX(12%)}
  50%{opacity:1;
  transform: translateX(-6%)}
  75%{opacity:1;
  transform: translateX(6%)}
  99%{opacity:1;
  transform:translateX(0%)}
  100%{opacity:1;
  transform: translateX(0%)}
`
//* underlineHover
export const showInNavItem = keyframes`
  0% {
transform:scale(0.8);
opacity: 0;
}
100% {
    transform:scale(1);
    opacity: 1;
  }
`;
// (Mouse) mouseSCrolling y scrollArrowIndicator
export const showInDown = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
      }
        `;
//mouseSCrolling
export const showMouse = keyframes`
0% {
        transform: translateY(0);
        opacity: .5;
    }
    40%, 50% {
        opacity: .8;
    }
    90%, 100% {
        transform: translateY(50%);
        opacity: .5;
    }`;
// scrollArrowIndicator
export const bounce = keyframes`
 50% {
    transform: translateY(-50%);
  }
`;
// Contact
export const showContact = keyframes`
to{
  rotate: -360deg;
  scale:0.8;
}
from{
  rotate: 0deg;
  scale:1;
}
`
// ProjectItem (title)
export const ShakeVertical = keyframes`
0%{transform:scale3d(1,1,1)}
30%{transform:scale3d(.75,1.25,1)}
40%{transform:scale3d(1.25,.75,1)}
50%{transform:scale3d(.85,1.15,1)}
65%{transform:scale3d(1.05,.95,1)}
75%{transform:scale3d(.95,1.05,1)}
100%{transform:scale3d(1,1,1)}`;