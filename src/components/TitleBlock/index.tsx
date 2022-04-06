import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";

import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { TitleBlockProps } from "./types";
import {
  TitleBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  Title,
  SubtitleWrapper,
  Bg,
  Layer,
} from "./styles";

import Globe from "../3D/Globe";

const TitleBlock = ({ title, content, button, t, id }: TitleBlockProps) => {
  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  // interface RigProps {
  //   children: ReactChild | ReactChildren;
  // }

  // function Rig({ children }: RigProps) {
  //   const ref: any = useRef();
  //   const vec = new THREE.Vector3();
  //   const { camera, mouse } = useThree();
  //   useFrame(() => {
  //     camera.position.lerp(vec.set(mouse.x * -2, 12, 3.5), 0.05);
  //     ref.current.position.lerp(vec.set(mouse.x * -1, mouse.y * 0.1, 0), 0.1);
  //     ref.current.rotation.y = THREE.MathUtils.lerp(
  //       ref.current.rotation.y,
  //       (-mouse.x * Math.PI) / 20,
  //       0.1
  //     );
  //   });
  //   return <group ref={ref}>{children}</group>;
  // }
  return (
    <TitleBlockContainer id={id}>
      {/* <Content>{t(content)}</Content> */}

      {/* <SphareWrapper> */}

      <Bg />

      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={["balck", 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[4, -2, 0]} fov={75}>
          <pointLight intensity={1} position={[0, -25, -10]} />
          <pointLight color={"pink"} intensity={1} position={[-12, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Globe></Globe>
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars
          radius={800}
          depth={10}
          count={1000}
          factor={30}
          saturation={60}
        />
        {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade /> */}
      </Canvas>
      <ContentWrapper>
        <Title>
          {t(title)}
          <span style={{ fontSize: "0.4em" }}>RUN THE</span>
          WORLD
        </Title>
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
      <SubtitleWrapper>
        <Content>{t(content)}</Content>
      </SubtitleWrapper>
      <Layer />
      <Loader />

      {/* </SphareWrapper> */}
    </TitleBlockContainer>
  );
};

export default withTranslation()(TitleBlock);
