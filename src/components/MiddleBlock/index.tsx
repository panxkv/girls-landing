import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content?: string;
  button: string;
  id: string; 
  t: any;
}

const MiddleBlock = ({ id, title, content, button, t }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection id={id}>
      <Row justify="center" align="middle"  >
        <ContentWrapper>
          <Col lg={48} md={24} sm={24} xs={24}>
            <h6>{t(title)}</h6>
            {content && <Content>{t(content)}</Content>}
            {button && (
              <Button onClick={() => {
                window.location.href = "mailto:info@girlsruntheworld.art";
            }}>
                {t(button)}
              </Button>
            )}
          </Col>
        </ContentWrapper>
      </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
