import styled from "styled-components";

export const TitleBlockContainer = styled("section")`
  height: 700px;
  background: #0d3b66;
  background: radial-gradient(
    at 50% 100%,
    #0277bd 0%,
    #0d3b66 70%,
    #0d3b66 80%,
    #0d3b66 100%
  );

  width: 100vw;

  @media only screen and (max-width: 1024px) {
    /* padding: 8rem 0 6rem; */
  }

  @media only screen and (max-width: 768px) {
    /* padding: 1rem; */
  }
`;

export const Content = styled("p")`
  font-size: 14px;
  color: white;
  letter-spacing: 2px;

  margin: 1.5rem 0 2rem 0;

  animation: color-animation 6s linear infinite;

  --color-1: #fff;
  --color-2: #f4d35e;
  --color-3: #faf0ca;

  @keyframes color-animation {
    0% {
      color: var(--color-1);
    }
    32% {
      color: var(--color-1);
    }
    33% {
      color: var(--color-2);
    }
    65% {
      color: var(--color-2);
    }
    66% {
      color: var(--color-3);
    }
    99% {
      color: var(--color-3);
    }
    100% {
      color: var(--color-1);
    }
  }

  @media only screen and (max-width: 575px) {
    display: none;
  }
`;

export const Title = styled("h1")`
  /* animation: breathing 5s ease-out infinite normal; */
  /* position: absolute; */
  /* top: 520px; */
  /* left: 0; */
  font-weight: 900;
  font-size: 4em;
  bottom: 0;
  margin: 0;
  font-weight: bold;
  color: #faf0ca;
  /* line-height: 0.6em; */
  letter-spacing: 20px;
  /* text-align: left; */


  @media only screen and (max-width: 1024px) {
    font-size: 1.8em;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.8em;
  }

  /* @media only screen and (max-width: 520px) {
    font-size: 1.4em;
    /* letter-spacing: 20px; */
    /* font-weight: bold; */
  } */

  /* animation: color-animation 6s linear infinite; */

  --color-1: #fff;
  --color-2: #f4d35e;
  --color-3: #faf0ca;

  @keyframes color-animation {
    0% {
      color: var(--color-1);
    }
    32% {
      color: var(--color-1);
    }
    33% {
      color: var(--color-2);
    }
    65% {
      color: var(--color-2);
    }
    66% {
      color: var(--color-3);
    }
    99% {
      color: var(--color-3);
    }
    100% {
      color: var(--color-1);
    }
  }
`;

export const ContentWrapper = styled("div")`
  position: absolute;
  left: 20%;
  top: 35%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 540px;

  @media only screen and (max-width: 1175px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* top: 50%; */
    /* padding-top: 4rem; */
    max-width: 540px;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;


  button:last-child {
    margin-left: 20px;
  }
`;

export const SubtitleWrapper = styled("div")`
  text-align: center;
  /* display: flex; */
  transform: translate(-50%, -50%);

  position: absolute;
  max-width: 740px;
  left: 50%;
  bottom: 5%;
`;

export const Icon = styled("a")`
  margin-top: 50px;
  fill: red;
  display: block;
  cursor: pointer;
  animation: float 6s ease-in-out infinite;
  /* z-index: -1; */
  color: white;
  font-size: 20px;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  @media only screen and (max-width: 1175px) {
    display: block;
 
  }
`;

export const Bg = styled("div")`
  border: 1px solid white;

  position: absolute;
  background: radial-gradient(
    at 50% 100%,
    #873740 0%,
    #272730 40%,
    #171720 80%,
    #070710 100%
  );
`;

export const Layer = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, transparent 100%);
  pointer-events: none;
`;
