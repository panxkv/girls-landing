import styled from "styled-components";

export const Container = styled("div")<any>`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid #0d3b66;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Filler = styled("div")<any>`
  width: ${(p) => p.completed}%;
  position: absolute;
  left: 0;
  top: 0px;
  height: 100%;
  background-color: #5225bd;
  border-radius: 8px;
  animation: g 2500ms infinite ease-in;
  z-index: 2;

  --color-1: #ee968c;
  --color-2: #ee967c;
  --color-3: #ee964b;

  @keyframes g {
    0% {
      background-color: var(--color-1);
    }
    50% {
      background-color: var(--color-2);
    }
    100% {
      background-color: var(--color-3);
    }
  }
`;

export const Liquid = styled("div")<any>`
  z-index: 1;
  width: 70px;
  height: 70px;
  animation: g 2500ms infinite ease-in-out,
    r 2500ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
  position: absolute;
  right: -5px;
  top: -10px;
  background-color: #5225bd;
  border-radius: 40%;

  @keyframes r {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;

export const Label = styled("span")<any>`
  font-weight: bold;
  z-index: 999;
  color: #0d3b66;
`;
