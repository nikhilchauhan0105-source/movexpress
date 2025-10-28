import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useEffectEvent } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
