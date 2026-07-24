import { lazy, Suspense } from "react";
import "./App.css";

const Home = lazy(() => import("./pages/Home.jsx"));

const Loader = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#141414",
  }}>
    <div style={{
      width: "50px",
      height: "50px",
      border: "4px solid #333",
      borderTop: "4px solid #e50914",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
    }} />
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}

export default App;
