import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Scene2 = () => {
  const { scene, error } = useGLTF("/scene.gltf"); // Update the path to your GLTF file

  useEffect(() => {
    if (error) {
      console.error("Error loading model:", error);
    }
  }, [error]);

  if (!scene) {
    return null; // Return nothing while the model is loading
  }

  return <primitive object={scene.clone()} />;
};

export default Scene2;
