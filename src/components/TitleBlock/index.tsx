import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { TitleBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import {
  TitleBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  Title,
} from "./styles";

const TitleBlock = ({
  title,
  content,
  button,
  icon,
  icon_width,
  icon_height,
  t,
  id,
}: TitleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <TitleBlockContainer  id={id}>
      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <Title>{t(title)}</Title>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => window.open(item.href, "_blank")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          {/* <Col lg={6} md={6} sm={6} xs={24}>
            <SvgIcon src={icon} width={icon_width} height={icon_height} />
          </Col> */}
        </Row>
      </Fade>
    </TitleBlockContainer>
  );
};

export default withTranslation()(TitleBlock);
