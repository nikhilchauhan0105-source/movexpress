import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Blogs from "./pages/Blogs";
import Services from "./components/services";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Blogs" element={<Blogs />} />
        
      </Routes>
    </>
  );
};

export default App;
