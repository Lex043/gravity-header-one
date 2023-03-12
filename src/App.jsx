import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-[#4737FF] px-3 lg:px-20 bg-pattern flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
