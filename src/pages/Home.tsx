import DownloadApp from "../components/DownloadApp";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SpaceOverview from "../components/SpaceOverview";

const Home = () => {
  return (
    <main className="bg-[#F9FAFF] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div className="mx-5 lg:mx-[120px] flex-grow">
        <Hero />
        {/* Features */}
        <Features />
        {/* Space Overview */}
        <SpaceOverview />
        {/* Download App */}
        <DownloadApp />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
