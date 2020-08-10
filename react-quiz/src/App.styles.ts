//
import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/dalmatian-dogs.jpg'

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;

}

body {
  background-image: url(${BGImage});
  background-size: cover;
  bakcground-position: 10% 50%;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: Catamaran, sans-serif;
  font-weight: 400;
  font-size: 20px;
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p{
  color: #fff;
}

.score{
  color: #000;
  font-size: 2rem;
  margin-bottom:5px;
  background: #ebfeffd3;
border-radius: 10px;
border: 2px solid #0085a3;
padding: 5px;
box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
text-align: center;
margin-top: 0;
}

h1 {
  font-family: Fascinate Inline, 'Arial Narrow Bold', sans-serif;
  background-image: linear-gradient(180deg, #FFF, #87F1FF);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px #0085a3);
  font-size: calc(10px + 5vw);
  font-weight: 400;
  text-align: center;
  margin: 20px; 
}

.start, .next {
  cursor: pointer;
  background: linear-gradient(180deg, #fff, #ffcc91);
  border: 2px solid #d38558;
  box-shadow: 0px 5px 10px rgba (0,0,0,0.25);
  border-radius: 10px;
  height: 40px;
  margin: 10px 0;
  padding: 0 40px;
}

.start {
  max-width: 200px;
}

`
