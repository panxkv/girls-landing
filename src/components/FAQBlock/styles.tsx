import styled from "styled-components";

export const FAQBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 20px;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const QAWrapper = styled("div")`
  border-top: 1px solid #0d3b66;
`;

export const Question = styled("p")`
padding: 0.75rem;


 color: #ee964b;

`;

export const AnswerPara = styled("p")`
  padding: 1rem 1.5rem 0.2rem;
  text-align: justify;

`;

export const ContentWrapper = styled("div")`
  padding-top: 20px;
  border: 1px solid #0d3b66;
  border-radius: 10px;
  background-color: #fff;
  

  max-width: 100%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
