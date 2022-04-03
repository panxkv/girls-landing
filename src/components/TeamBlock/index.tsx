import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { TeamnBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";

import ania from "../../images/ania.png";
import edyta from "../../images/edyta.png";
import kamil from "../../images/kamil.png";

import {
  TeamBlockContainer,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinPara,
  MinTitle,
  IconWraper,
  SectionItem,
  Avatar,
  HeaderWraper,
  StyledAnchor,
} from "./styles";

type imageOptions = {
  [key: string]: string;
};

const images: imageOptions = {
  ania,
  edyta,
  kamil,
};

function getImageByKey(key: string) {
  return images[key];
}

interface SocialLinkProps {
  href: string;
  src: string;
}

const SocialLink = ({ href, src }: SocialLinkProps) => {
  return (
    <StyledAnchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={src}
      aria-label={src}
    >
      <SvgIcon src={src} width="25px" height="25px" />
    </StyledAnchor>
  );
};

const TeamBlock = ({
  title,
  content,
  section,
  t,
  id,
}: TeamnBlockProps) => {
  return (
    <TeamBlockContainer id={id}>
      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col>
            <ContentWrapper>
              <h1>{t(title)}</h1>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                {typeof section === "object" &&
                  section.map((item: any, id: number) => {
                    return (
                      <Col xl={12} lg={12} md={24}>
                        <SectionItem>
                          <IconWraper>
                            <Avatar icon={getImageByKey(item.icon)} />
                          </IconWraper>
                          <HeaderWraper>
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinTitle>
                              {
                                item.social_links.map((social_link: any, id: number) => {
                                  return (
                                    <SocialLink
                                    href={social_link.href}
                                    src={social_link.icon}
                                  />
                                  );
                                }
                                )
                              }
                            </MinTitle>
                          </HeaderWraper>
                          <MinPara>{t(item.content)}</MinPara>
                        </SectionItem>
                      </Col>
                    );
                  })}
              </ServiceWrapper>
              {/* <ButtonWrapper>
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
              </ButtonWrapper> */}
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </TeamBlockContainer>
  );
};

export default withTranslation()(TeamBlock);
