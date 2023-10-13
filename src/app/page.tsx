import Feature from "./components/Features/Feature";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Navbar/Nav";

const HomePage = () => {
  return (
    <>
      <div className="px-4 lg:px-0 pt-4 lg:bg-zinc-900">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
          <Nav />
          <Hero />
        </div>
      </div>
      <Feature />
    </>
  );
};

export default HomePage;
