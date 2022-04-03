import { lazy } from "react";

const MissionBlock = lazy(() => import("../../components/MissionBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));


const NotFound = () => {
  return (
    <>
    
        <Container>
      <ScrollToTop />
      <MissionBlock
        title={"Ups"}
        content={"Sorry, seems like we are miss that page"}
        icon_height="100%"
        icon_width="100%"
        icon="girl.svg"
        id="mission"
      />
    
    </Container>
    </>
  );
};

export default NotFound;