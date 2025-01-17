"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ThreeEvent } from "@react-three/fiber"; // Import ThreeEvent

// 3D Component - Rotating and Draggable Cube
function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null); // Ref for the cube
  const [hovered, setHovered] = useState(false); // State for tracking if the cube is hovered
  const [isDragging, setIsDragging] = useState(false); // State to check if the cube is being dragged
  const [dragStart, setDragStart] = useState<THREE.Vector3 | null>(null); // Starting position when dragging

  // Rotate the cube on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotate on the X axis
      meshRef.current.rotation.y += 0.01; // Rotate on the Y axis
    }
  });

  // Handle mouse down (start dragging)
  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);

    // Save initial click position (make sure this is correctly typed)
    setDragStart(new THREE.Vector3(e.clientX, e.clientY, 0)); // Example conversion to 3D space
  };

  // Handle mouse move (dragging)
  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging && meshRef.current && dragStart) {
      // Calculate the new position based on mouse movement
      const dragDelta = new THREE.Vector3(
        e.clientX - dragStart.x,
        e.clientY - dragStart.y,
        0
      );
      meshRef.current.position.add(dragDelta);
      setDragStart(new THREE.Vector3(e.clientX, e.clientY, 0)); // Update the start position
    }
  };

  // Handle mouse up (stop dragging)
  const onPointerUp = () => {
    setIsDragging(false); // Stop dragging when the mouse is released
  };

  // Implement hover effects
  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)} // On hover
      onPointerOut={() => setHovered(false)} // On pointer out
      onPointerDown={onPointerDown} // Handle mouse down (start dragging)
      onPointerMove={onPointerMove} // Handle mouse move (dragging)
      onPointerUp={onPointerUp} // Handle mouse up (stop dragging)
      position={[0, 0, 0]} // Set initial position of the cube
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? "yellow" : "royalblue"} // Change color when hovered
      />
    </mesh>
  );
}

export default RotatingCube;
