import DownloadApp from "./components/DownloadApp/DownloadApp";
import Feature from "./components/Features/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Navbar/Nav";

const HomePage = () => {
  return (
    <>
      <div className="px-4 lg:px-0 pt-4 lg:bg-zinc-950">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
          <Nav />
          <Hero />
        </div>
      </div>
      <Feature />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default HomePage;
