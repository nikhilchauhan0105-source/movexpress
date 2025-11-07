import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import About from "./components/About";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogsPage from "./pages/BlogsPage";
import Homepage from "./pages/Homepage";
import ManVanService from "./pages/ManVanService";
import ServicePage from "./pages/ServicePage";
import SignUpAsDriver from "./pages/SignUpAsDriver";
import VechcleInfo from "./pages/VehcleInfo";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:blogid" element={<BlogDetailsPage />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/manvanservices" element={<ManVanService />} />
        <Route path="/becomedriver" element={<SignUpAsDriver />} />
        <Route path="/VechcleInfo" element={<VechcleInfo />} />
      </Routes>
    </>
  );
};

export default App;
