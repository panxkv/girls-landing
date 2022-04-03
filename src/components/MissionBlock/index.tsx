import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { MissionBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";

import {
  MissionBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ServiceWrapper,
  MinPara,
  MinTitle,
} from "./styles";

const MissionBlock = ({
  title,
  content,
  button,
  section,
  second_content,
  t,
  id,
}: MissionBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MissionBlockContainer id={id}>
      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col>
            <ContentWrapper>
              <h1>{t(title)}</h1>
              <Content>{t(content)}</Content>
              {typeof second_content === "string" && (
                <Content>{t(second_content)}</Content>
              )}
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </MissionBlockContainer>
  );
};

export default withTranslation()(MissionBlock);
