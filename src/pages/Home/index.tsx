import { lazy } from "react";

import CollectionContent from "../../content/CollectionContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import TitleContent from "../../content/TitleContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const TitleBlock = lazy(() => import("../../components/TitleBlock"));
const MissionBlock = lazy(() => import("../../components/MissionBlock"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
 
      <TitleBlock
        title={TitleContent.title}
        content={TitleContent.text}
        button={TitleContent.button}
        icon_height="100%"
        icon_width="100%"
        icon="world.svg"
        id="intro"
      />
      <MissionBlock
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.section}
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
      {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon_height="100%"
        icon_width="100%"
        icon="waving.svg"
        id="product"
      /> */}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="contact"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="dupka"
      />
    </Container>
  );
};

export default Home;
