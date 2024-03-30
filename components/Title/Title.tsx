import styled from "styled-components";

const Title = styled.h1`
  font-size: 0.6rem;
  color: red;
  text-align: center;
  margin-top: 25vh;
  font-family: "Courier New", monospace;
  white-space: pre;
  font-style: normal;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 60s infinite linear;
  @-webkit-keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }

    to {
      -webkit-filter: hue-rotate(360deg);
    }
}
`;

export default Title;
