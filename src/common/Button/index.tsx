import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  type,
  onClick,
}: ButtonProps) => (
  <StyledButton type={type} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
