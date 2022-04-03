import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Spaher = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#EE964B"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={2}
      />
    </Sphere>
  );
}

export default Spaher;
