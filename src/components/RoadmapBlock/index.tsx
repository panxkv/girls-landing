import React, { useState } from "react";

import { Row, Col, Modal } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";

import { RoadmapBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import {
  RoadmapBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ServiceWrapper,
  KanbanBoard,
  KanbanColumn,
  MinPara,
  MinTitle,
  KanbanCard,
  KanbanColumnHeader,
  Overlay,
  OverlayAnchor,
  Tag,
  ModalWrapper,
  Phase,
} from "./styles";
import { ProgressBar } from "../../common/ProgressBar";

const RoadmapBlock = ({
  title,
  content,
  button,
  roadmapItems,
  icon,
  icon_width,
  icon_height,
  t,
  id,
}: RoadmapBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const openModal = (modalContent?: any) => {
    setVisible(true);
    setModalContent(modalContent);
  };
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    more: "",
    phase: "",
  });
  return (
    <RoadmapBlockContainer id={id}>
      <Fade direction="right">
        <Row justify="center" align="middle">
          <Col>
            <h4>{t(title)}</h4>
            <Content>{t(content)}</Content>
            <ContentWrapper>
              <Modal
                // title={modalContent.title}
                visible={visible}
                keyboard={true}
                footer={null}
                onCancel={() => setVisible(false)}
              >
                <ModalWrapper>
                  {/* <Row justify="space-between" align="middle"> */}
                  <Row justify="center" align="middle">
                    <Col lg={20} md={20} sm={20} xs={20}>
                      <KanbanColumnHeader>
                        {modalContent.title}
                      </KanbanColumnHeader>
                      <ProgressBar
                        bgcolor="black"
                        completed={modalContent.phase}
                      />
                      {modalContent.more}
                    </Col>
                  </Row>
                </ModalWrapper>
              </Modal>
              <KanbanBoard>
                <KanbanColumn>
                  <KanbanColumnHeader>Pipeline</KanbanColumnHeader>
                  {typeof roadmapItems === "object" &&
                    roadmapItems.map((item: any, id: number) => {
                      return (
                        <KanbanCard>
                          <Overlay
                            onClick={() =>
                              openModal({
                                title: item.title,
                                more: item.more,
                                phase: item.phase,
                              })
                            }
                          >
                            <OverlayAnchor>READ MORE</OverlayAnchor>
                          </Overlay>
                          {/* <SvgIcon src={item.icon} width="60px" height="60px" /> */}
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                          <Row>
                            {typeof item.tags === "object" &&
                              item.tags.map((item: any, id: number) => {
                                return <Tag>{t(item)}</Tag>;
                              })}
                          </Row>
                        </KanbanCard>
                      );
                    })}
                </KanbanColumn>
                <KanbanColumn>
                  <KanbanColumnHeader>Completed</KanbanColumnHeader>
                </KanbanColumn>
              </KanbanBoard>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </RoadmapBlockContainer>
  );
};

export default withTranslation()(RoadmapBlock);