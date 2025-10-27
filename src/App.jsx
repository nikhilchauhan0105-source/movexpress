import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";

import About from "./components/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
};

export default App;
