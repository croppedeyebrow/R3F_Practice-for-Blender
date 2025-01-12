import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model() {
  // useGLTF.preload를 추가하여 모델을 미리 로드
  const { scene } = useGLTF("/character/character.gltf");
  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}

// 컴포넌트 외부에 preload 추가
useGLTF.preload("/character/character.gltf");

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
