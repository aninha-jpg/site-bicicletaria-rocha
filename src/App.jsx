import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Home />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}


export default App;