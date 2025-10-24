
import Customer from '../components/Customer';
import Hero from '../components/Hero';
import Services from '../components/services';
import Whytrust from '../components/Whytrust';
import { Work } from '../components/Work';
import Navbar from '../Navbar'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Whytrust />
      <Customer />
    </div>
  );
}

export default Homepage