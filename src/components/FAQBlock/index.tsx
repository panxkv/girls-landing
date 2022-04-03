import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import {
  FAQBlockSection,
  ContentWrapper,
  Question,
  AnswerPara,
  QAWrapper,
} from "./styles";

interface FAQBlockProps {
  title: string;
  content?: string;
  items: any;
  id: string;
  t: any;
}

const FAQBlock = ({ id, title, items, t }: FAQBlockProps) => {
  return (
    <FAQBlockSection id={id}>
      <Row>
        <ContentWrapper>
          <h6>{t(title)}</h6>
          {typeof items === "object" &&
            items.map((faq_item: any, id: number) => {
              return (
                <QAWrapper>
                  <Row align="middle">
                    <Col xl={9} lg={9} md={9} sm={24} xs={24}>
                      <Question>{faq_item.question}</Question>
                    </Col>
                    <Col xl={15} lg={15} md={15} sm={24} xs={24}>
                      {faq_item.answer.map((para: any) => {
                        return <AnswerPara>{para}</AnswerPara>;
                      })}
                    </Col>
                  </Row>
                </QAWrapper>
              );
            })}
        </ContentWrapper>
      </Row>
    </FAQBlockSection>
  );
};

export default withTranslation()(FAQBlock);
