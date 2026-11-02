import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Parts from "./components/parts/parts";
import Bike from "./components/bike/bike";
import ProductAccessories from "./components/productsAccessories/productsAccessories";
import MaintenanceServices from "./components/maintenanceServices/maintenanceServices";
import CallToAction from "./components/callToAction/callToAction";
import Payments from "./components/payments/payments";
import CTA from "./components/cta/cta";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Products />

      <Bike />
      <CallToAction />
      <MaintenanceServices />
      <CTA />
      <Parts />
      <ProductAccessories />
      <Payments />
      <About />
      <Contact />
      <Footer />
    </>
  );
}


export default App;