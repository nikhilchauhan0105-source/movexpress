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
import { getAuth } from "firebase/auth";
import app, { db } from "./utills/firebase";
import { addDoc, collection } from "firebase/firestore";
const auth = getAuth(app);

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  const [quantities, setQuantities] = useState({});
  const [isTyped, setIsTyped] = useState("");
  const [isDestinationTyped, setIsDestinationTyped] = useState("");
  const [loadingunloadingTime, setLoadingUnloadingTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [vanvalue, setVanValue] = useState("");

  const handleselectvan = (e) => {
    setVanValue(e);
  };
  const details = {
    pickupaddress: isTyped,
    destinationaddress: isDestinationTyped,
    vantype: vanvalue,
    loadingtime: loadingunloadingTime,
    startdate: startDate,
    startime: startTime,
  };

  const HandleConform = async () => {
    if (
      details.pickupaddress === "" ||
      details.destinationaddress === "" ||
      details.vantype === "" ||
      details.loadingtime === "" ||
      details.startdate === "" ||
      details.startime === ""
    ) {
      alert("fill all inputs");
      return;
    }
    const userCollection = collection(db,"User");
    const itemsCollection = collection(db,"items");
    try {
      await addDoc(userCollection, details);
      await addDoc(itemsCollection, quantities);
      alert("data sent sucessful");
    } catch (error) {
      return error;
    }
  };

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
          vanvalue,
          setVanValue,
          handleselectvan,
          HandleConform,
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogsPage" element={<BlogsPage />} />
          <Route path="/blogs/:blogid" element={<BlogDetailsPage />} />
          <Route
            path="/servicepage/manvanservices"
            element={<ManVanService />}
          />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/manvanservices" element={<ManVanService />} />
          <Route path="/becomedriver" element={<SignUpAsDriver />} />
          <Route path="/VechcleInfo" element={<VechcleInfo />} />
        </Routes>
      </informationContext.Provider>
    </>
  );
};

export default App;
