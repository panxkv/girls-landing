import styled from "styled-components";

export const TitleBlockContainer = styled("section")`
  position: relative;
  padding: 4rem 0 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const Title = styled("h1")`

@media only screen and (max-width: 520px) {
  font-size: 60px;
}
  font-family: "Choko";
  letter-spacing: 30px;
  font-size: 80px;
  animation: color-animation 4s linear infinite;

  --color-1: #0D3B66;
  --color-2: #F4D35E;
  --color-3: #EE964B;

  @keyframes color-animation {
    0%    {color: var(--color-1)}
    32%   {color: var(--color-1)}
    33%   {color: var(--color-2)}
    65%   {color: var(--color-2)}
    66%   {color: var(--color-3)}
    99%   {color: var(--color-3)}
    100%  {color: var(--color-1)}
  }

`;

export const ContentWrapper = styled("div")`
  position: relative;
  text-align: center;
   // max-width: 540px;

  
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
    max-width: 540px;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;


  // @media screen and (min-width: 1024px) {
  //   max-width: 80%;
  // }

  button:last-child {
    margin-left: 20px;
  }
`;
