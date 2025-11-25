import Aos from "aos";
import "aos/dist/aos.css";
import {  useEffect, useState} from "react";
import { Route, Routes } from "react-router";
import About from "./components/About";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogsPage from "./pages/BlogsPage";
import Homepage from "./pages/Homepage";
import ManVanService from "./pages/ManVanService";
import ServicePage from "./pages/ServicePage";
import SignUpAsDriver from "./pages/SignUpAsDriver";
import VechcleInfo from "./pages/VehcleInfo";
import { ItemsqauntitesContext } from "./context/context";



const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });

  }, []);
 const [quantities, setQuantities] = useState({}); 
 useEffect(() => {
   console.log("Updated quantities: ", quantities);
 }, [quantities]);


  return (
    <>
      <ItemsqauntitesContext.Provider value={{quantities, setQuantities}}>
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
      </ItemsqauntitesContext.Provider>
    </>
  );
};

export default App;
