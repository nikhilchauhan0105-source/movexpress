import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import About from "./components/About";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogsPage from "./pages/BlogsPage";
import Homepage from "./pages/Homepage";
import ManVanService from "./pages/ManVanService";
import ServicePage from "./pages/ServicePage";
import SignUpAsDriver from "./pages/SignUpAsDriver";
import VechcleInfo from "./pages/VehcleInfo";
import { informationContext } from "./context/context";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [quantities, setQuantities] = useState({});
  const [isTyped, setIsTyped] = useState("");
  const [isDestinationTyped, setIsDestinationTyped] = useState("");
  const [loadingunloadingTime, setLoadingUnloadingTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  useEffect(() => {
    console.log("Updated quantities: ", quantities);
  }, [quantities]);

  return (
    <>
      <informationContext.Provider
        value={{
          quantities,
          setQuantities,
          isTyped,
          setIsTyped,
          isDestinationTyped,
          setIsDestinationTyped,
          loadingunloadingTime,
          setLoadingUnloadingTime,
          startDate,
          setStartDate,
          startTime,
          setStartTime,
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogsPage" element={<BlogsPage />} />
          <Route path="/blogs/:123" element={<BlogDetailsPage />} />
          <Route
            path="/servicepage/manvanservices"
            element={<ManVanService />}
          />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/manvanservices" element={<ManVanService />} />
          <Route path="/becomedriver" element={<SignUpAsDriver />} />
          <Route path="/VechcleInfo" element={<VechcleInfo />} />
        </Routes>
      </informationContext.Provider>
    </>
  );
};

export default App;
