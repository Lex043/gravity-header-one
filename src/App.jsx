import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-[#4737FF] bg-pattern min-h-screen flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
