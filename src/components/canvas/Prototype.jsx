import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Prototype = ({ isMobile }) => {
  const model = useGLTF("./model/Model.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor='black' />
      <pointLight intensity={0.1} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [10, -20, -2.2] : [0, -20, -1.5]}
        rotation={[-0.01, 1.5, -0.1]}
      />
    </mesh>
  );
};

const PrototypeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [50, 800, 5], fov: 4 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Prototype isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PrototypeCanvas;
