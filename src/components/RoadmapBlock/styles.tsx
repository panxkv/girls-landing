import styled from "styled-components";

export const RoadmapBlockContainer = styled("section")`
  position: relative;
  scroll-margin-top: 110px;

  // padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  display: flex;
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const KanbanBoard = styled("div")`
  display: flex;
  width: 100%;
  border-radius: 25px;
  @media screen and (max-width: 700px) {
    max-width: 100%;
    flex-direction: column;
  }
  flex-direction: row;
  // background-color: #F4D35E;
`;

export const KanbanColumn = styled("div")`
  display: flex;
  border-radius: 25px;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  // background-color: #F4D35E;
  margin: 0;
  padding: 10px 10px 0;

  list-style: none;
`;

export const KanbanColumnHeader = styled("div")`
  color: #0d3b66;
  // padding: 10px;
  font-weight: bold;
  font-size: 1.875rem;
`;

export const Overlay = styled("div")`
  padding: 20px 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  rigth: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  border-radius: 10px;
  flex-direction: column;
  backdrop-filter: blur(2px);
  transition: all 0.5s;
`;

export const KanbanCard = styled("div")`
  padding: 20px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #0d3b66;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
  }

  &:hover ${Overlay} {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0d3b66;
  }
`;

export const OverlayAnchor = styled("a")`
  font-size: 16px;
  color: white;
  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.11);
    -ms-transform: scale(1.11);
    transform: scale(1.11);
    // color: #ee964b;
  }
`;

export const Tag = styled("div")`
  border-radius: 100px;
  margin: 5px;
  padding: 8px 8px;
  font-size: 12px;
  width: 100px;
  background-color: #0d3b66;
  color: white;
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
  font-size: 18px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #ee964b;
  font-family: "Josefin Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 18px;
`;

export const ModalWrapper = styled("div")`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  border-radius: 25px;

  background-color: white;
  position: relative;
  border: 1px solid #0d3b66;
  padding: 7.5rem 1rem 7.5rem;
  text-align: center;
  display: flex;
  justify-content: center;

  // text-align: center;
  font-size: 24px;
`;

export const Phase = styled("div")`
  margin-bottom: 40px;
  margin-top: 40px;
  height: 2px;
  width: 40%;
  background: #ee964b;
  font-size: 44px;
`;
