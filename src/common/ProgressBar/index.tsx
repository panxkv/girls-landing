import { ProgressBarProps } from "../types";
import { Container, Liquid, Filler, Label } from "./styles";
import { Row, Col } from "antd";

export const ProgressBar = ({ bgcolor, completed }: ProgressBarProps) => {
  return (
    <Row>
      <Container>
        <Label>{completed}% SALES</Label>
        <Filler completed={completed}>
          <Liquid></Liquid>
        </Filler>
      </Container>
    </Row>
  );
};
