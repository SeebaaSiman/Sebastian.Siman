import styled from "styled-components";
const img1 = "https://images.unsplash.com/photo-1477353822394-80a4b0a3c493?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=ff04213f3d2f0c54aaa47a34bb91df30"
export const Parallax = styled.div`
height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img1});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
//Margen superior e inferior de 40px, margen horizontal auto
export const Flex = styled.div`
  width: 90%;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;`
export const Item = styled.div`
  height: 300px;
  margin: 10px 0;
  width: 30%;
  color: black;
  font-size: 1em;
    /* p {
  text-align: justify;
} */
`
export const Double = styled.div`
 height: 50vh;
  /* margin: 10px 0; */
  width: 50%;
  /* color: white; */
  /* font-size: 1em; */
/* width: 100%; */
  background-image: url("https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Double2 = styled.div`
height: 50vh;
  margin: 10px 0;
  width: 50%;
  color: white;
  font-size: 1em;
/* width: 100%; */
background-image: url("https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3743c450231eda3df43a243f1cca2fc0");
background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  `