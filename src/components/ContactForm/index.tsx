import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer } from "./styles";

const Contact = ({ title, content, id }: ContactProps) => {
  // const { errors } = useForm(
  //   validate
  // ) as any;

  // const ValidationType = ({ type }: ValidationTypeProps) => {
  //   const ErrorMessage = errors[type];
  //   return (
  //     <Zoom direction="left">
  //       <Span erros={errors[type]}>{ErrorMessage}</Span>
  //     </Zoom>
  //   );
  // };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              
              <p>
                
                <button type="submit">Send</button>
              </p>
            </form>
            {/* <FormGroup autoComplete="off" name="contact" onSubmit={handleSubmit} method="POST " data-netlify="true"> */}
            {/* <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col> */}
            {/* <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col> */}
            {/* <Col span={24}>
                <TextAreac
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col> */}
            {/* <ButtonContainer>
                <Button type="submit" name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup> */}
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
