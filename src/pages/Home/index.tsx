import { lazy } from "react";


import CollectionContent from "../../content/CollectionContent.json";
import PartnershipContent from "../../content/PartnershipContent.json";
import MissionContent from "../../content/MissionContent.json";
import TitleContent from "../../content/TitleContent.json";
import RoadmapContent from "../../content/RoadmapContent.json";
import TeamContent from "../../content/TeamContent.json";
import FAQContent from "../../content/FAQContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const FAQBlock = lazy(() => import("../../components/FAQBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const TitleBlock = lazy(() => import("../../components/TitleBlock"));
const MissionBlock = lazy(() => import("../../components/MissionBlock"));
const RoadmapBlock = lazy(() => import("../../components/RoadmapBlock"));
const TeamBlock = lazy(() => import("../../components/TeamBlock"));

const Home = () => {
  return (
    <>
         <TitleBlock
        title={TitleContent.title}
        content={TitleContent.text}
        button={TitleContent.button}
        icon_height="100%"
        icon_width="100%"
        icon="world.svg"
        id="intro"
      />
        <Container>
      <ScrollToTop />
      <MissionBlock
        title={MissionContent.title}
        content={MissionContent.text}
        second_content={MissionContent.second_text}
        icon_height="100%"
        icon_width="100%"
        icon="girl.svg"
        id="mission"
      />
      <ContentBlock
        type="right"
        title={CollectionContent.title}
        content={CollectionContent.text}
        icon_height="100%"
        icon_width="100%"
        icon="vid/vid1.mp4"
        id="collection"
      />

      <RoadmapBlock
        title={RoadmapContent.title}
        content={RoadmapContent.text}
        roadmapItems={RoadmapContent.roadmapItems}
        icon_height="100%"
        icon_width="100%"
        icon="girl.svg"
        id="roadmap"
      />
      <TeamBlock
        title={TeamContent.title}
        section={TeamContent.section}
        icon_height="100%"
        icon_width="100%"
        icon="girl.svg"
        id="team"
      />
      <FAQBlock
        title={FAQContent.title}
        items={FAQContent.items}
        id="faq"
      />
        <MiddleBlock
        title={PartnershipContent.title}
        content={PartnershipContent.text}
        button={PartnershipContent.button}
        id="contact"
      />
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="dupka"
      /> */}
    </Container>
    </>

  );
};

export default Home;
