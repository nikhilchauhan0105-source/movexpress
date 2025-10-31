import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import BlogsPage from "./pages/BlogsPage";
import ServicePage from "./pages/ServicePage";
import ManVanService from "./pages/ManVanService";
import BookYourService from "./components/BookYourService";
import SignUpAsDriver from "./pages/SignUpAsDriver";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogsPage" element={<BlogsPage />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/manvanservices" element={<ManVanService/>} />
        <Route path="/BookYourServices" element={<SignUpAsDriver/>} />

      </Routes>
    </>
  );
};

export default App;
