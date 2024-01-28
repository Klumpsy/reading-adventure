import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { useEffect, Suspense } from "react";
import { TextureLoader } from "three";

const worlds = [
  {
    id: 1,
    name: "worldOne",
    position: [0, 0, 0],
    pointsOfInterest: [{ id: 1, name: "Point1", position: [1, 0, 0] }],
  },
];

const NumberedCircle = ({ position, number, onClick }) => {
  return (
    <mesh position={position} onClick={onClick}>
      <circleGeometry args={[0.1, 32]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

const WorldSphere = () => {
  const earthTexture = useLoader(
    TextureLoader,
    "/assets/images/worldTexture.png"
  );

  const handleCircleClick = (number) => {
    console.log(`Clicked on circle ${number}`);
  };

  const SetupCamera = () => {
    const { camera } = useThree();
    useEffect(() => {
      camera.position.set(0, 0, 5);
      camera.lookAt(0, 0, 0);
    }, [camera]);
    return null;
  };

  console.log("earthTexture:", earthTexture);

  return (
    <div className="container">
      <h1>Lees wereld</h1>
      <div className="canvas-container">
        <Canvas>
          <Suspense fallback={<div>Loading...</div>}>
            <SetupCamera />
            <OrbitControls enablePan={false} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sphere visible args={[2, 64, 64]}>
              <sphereGeometry args={[2, 64, 64]} />
              <meshStandardMaterial map={earthTexture} />
            </Sphere>
            {worlds.map((world) => (
              <group key={world.id}>
                <NumberedCircle
                  position={[1, 0, 0]}
                  number={1}
                  onClick={() => handleCircleClick(1)}
                />
              </group>
            ))}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default WorldSphere;
