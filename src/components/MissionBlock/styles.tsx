import styled from "styled-components";

export const MissionBlockContainer = styled("section")`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10rem 0 8rem;


  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  // padding-top: 20px;
  position: relative;
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const ServiceWrapper = styled("div")`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  color: #0d3b66;
  /* font-weight: bold; */
  font-size: 1.875rem;
  padding-bottom: 20px;
  /* text-transform: uppercase; */

  font-family: "Josefin Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 18px;
`;
