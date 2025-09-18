import styled from "styled-components";

export const GridProjectsStyle = styled.div`
  width: 100%;
  max-width:100vw;
  min-width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-width: 1px;
  font-family: "Zodiak", sans-serif;
  overflow: hidden;
`
export const LinkBoxItem = styled.div`
  position: relative;
display: grid;
place-content: center;
width: 100%;
height: 29vh;
background-color: #000;
cursor: none;
  img {
 border-radius:12px;
object-fit:cover;
 height: 28.5vh;
 width: 100%;
}
`
export const LinkBoxItemOverlay = styled.div`
  display: grid;
 position: absolute;
 border-radius:12px;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 place-content: center;
 background-color: #e6e4e2;
 color: #111827;
`

