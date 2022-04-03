import { initReactI18next } from "react-i18next";
import styled from "styled-components";
import ania from "../../images/ania.png"


export const TeamBlockContainer = styled("section")`
  position: relative;
  display: flex;
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
  // padding-top: 70px;
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
  // padding-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  max-width: 100%;
 
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SectionItem = styled("div")`
  // padding: 30px;
  margin: 10px;
  display: flex;
  flex: 50%;

  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  // max-width: 500px;
  border-radius: 20px;
  background-color: #fff;
  border:1px solid #0D3B66;
  @media only screen and (max-width: 992px) {
    // width: 500px;
  }

`;

export const MinTitle = styled("h6")`
  font-size: 1.5rem;
  padding: 1rem;
  display:inline-block;

  text-align: center;
  border-top:1px solid #0D3B66;

  color: #ee964b;
  flex: 50%;
  font-family: "Josefin Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 18px;
  padding: 2rem;

  border-top:1px solid #0D3B66;

`;

export const IconWraper = styled("div")`
  border-radius: 20px;
  border-radius: 200px;
  margin: 2 0px;
  padding: 40px;
`;

export const HeaderWraper = styled("div")`
  display: flex;
  flex-direction: row;  
`;

export const Avatar = styled.div.attrs((props: { icon: string }) => props)`
// background-image: url(${ania});
background-image: url('${props => props.icon}');
width: 100%;
height: 400px;
background-size: cover;
background-position: top center;
border-radius: 25px;
@media only screen and (max-width: 992px) {
  // min-height: 1000px;
}
  // min-height: 350px;
`;

export const StyledAnchor = styled("a")`
  padding: 10px;
  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
