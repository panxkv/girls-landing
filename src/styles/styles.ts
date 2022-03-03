import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import wave from "../images/wave.svg";
import wave1 from "../images/wave1.svg";
import section from "../images/section1.svg";

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
        // Lemon Meringue
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

        :hover {
            color: #;
        }
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
  top: 2340px;
  height: 446px;
  background-image: url(${wave});
`;

export const Wave2 = styled(Wave)`
  top: 2340px;
  height: 446px;
  background-image: url(${wave1});
`;

export const Section = styled(Wave)`
  top: 1680px;
  height: 446px;
  background-image: url(${section});
`;
