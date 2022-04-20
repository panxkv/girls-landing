import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import wave from "../images/wave.svg";
import wave1 from "../images/wave1.svg";
import wave2 from "../images/wave2.svg";
import wave3 from "../images/wave3.svg";
import wave4 from "../images/wave4.svg";
import section from "../images/section1.svg";
import girls from "../images/girls.png"

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Josefin Sans Light";
        src: url("/fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Josefin Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #faf0ca;
        overflow-x: hidden;
    }

    a:hover {
        color: #fff;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #0D3B66 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Josefin Sans Light', serif;
        color: #0D3B66;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #0D3B66;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #0D3B66;

    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .ant-modal, .ant-modal-content {
      position: fixed;
      overflow-y:scroll;
      overflow-x:hidden;


        animation-duration: 0s !important;

        background-color: #FAF0CA;
        height: 100vh;
        width: 100vw;
        margin: 0;
        top: 0;
        bottom: 0;

       }
       .ant-modal-body {
        background-color: #FAF0CA;

        height: calc(100vh - 110px);
       }
       .ant-modal-header {
        background-color: #FAF0CA;
        display: flex;
        justify-content: center;

       }
       .ant-modal-title {
        // padding: 3rem;
        color: #0D3B66;

        font-size: 3rem;
       }
       .ant-modal-close-x {
        {
            font-size: 40px;
            margin: 50px;
            color: #0D3B66;

            &:hover,
            &:active,
            &:focus {
              -webkit-transform: scale(1.01);
              -ms-transform: scale(1.01);
              transform: scale(1.01);
              color: #EE964B;
            }
        }
`;

export const GlobalLinkRight = styled.a`
  position: fixed;
  background-color: white;
  /* color: #404EED; */
  padding: 23px 80px;
  cursor: pointer;
  left: -110px;
  border-radius: 25px;
  border: 1px solid #0d3b66;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(+90deg);
  font-size: 18px;
  font-weight: 500;
  z-index: 91;

  /* // color: #0D3B66; */
  /* color: white; */
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #404EED;
    border: 1px solid white;
  }

  @media only screen and (max-width: 814px) {
    display: none;
  }
`;

const Wave = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`;

export const Wave1 = styled(Wave)`
  top: 1700px;
  height: 446px;
  z-index: 2;
  background-image: url(${wave});
`;

export const Wave2 = styled(Wave)`
  top: 480px;
  /* z-index: 1; */
  height: 446px;
  background-image: url(${wave1});
`;

export const Girls = styled(Wave)`
  top: 320px;
  /* z-index: 2; */
  height: 100%;
  background-image: url(${girls});
`;

export const Wave3 = styled(Wave)`
  top: 1800px;
  height: 446px;
  background-image: url(${wave2});
`;

export const Wave4 = styled(Wave)`
  top: 1020px;
  height: 446px;
  background-image: url(${wave3});
`;

export const Wave5 = styled(Wave)`
  top: 1380px;
  height: 446px;
  background-image: url(${wave4});
`;

export const Section = styled(Wave)`
  top: 1680px;
  height: 446px;
  background-image: url(${section});
`;
