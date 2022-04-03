import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  LogoText,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

interface ButtonMailtoProps {
  mailto: string;
  label: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  const ButtonMailto = ({ mailto, label }: ButtonMailtoProps) => {
    return (
      <Large
        to="#"
        onClick={(e: any) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Large>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              {/* <ButtonMailto to="">{t("Tell us everything")}</ButtonMailto> */}
              <ButtonMailto
                label="Tell us everything"
                mailto="mailto:info@girlsruntheworld.art"
              />

              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/legal-page " left="true">
                {t("Legal Page")}
              </Large>
            </Col> */}
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <LogoText>GIRLS RUN THE WORLD</LogoText>
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://medium.com/@girls_run_the_world_nft"
                src="medium.svg"
              />
              <SocialLink
                href="https://twitter.com/girlsrunthe_NFT"
                src="twitter.svg"
              />
              {/* <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="open-sea.svg"
              /> */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
      <Row justify="center" align="middle">
        <Col >Girls Run The World © 2022</Col>
      </Row>
      <Row justify="center" align="middle">
        <Col> Made out of ❤️ for women by <a target="_blank" href="https://twitter.com/im_a_kk">KK</a> </Col>
      </Row>
    </>
  );
};

export default withTranslation()(Footer);
