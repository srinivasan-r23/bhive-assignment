import DownloadApp from "../components/DownloadApp";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SpaceOverview from "../components/SpaceOverview";

const Home = () => {
  return (
    <main className="bg-[#F9FAFF] min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Features */}
      <Features />
      {/* Space Overview */}
      <SpaceOverview />
      {/* Download App */}
      <DownloadApp />
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
