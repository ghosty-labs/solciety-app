import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-10 lg:grid grid-cols-12 gap-10">
      <div className="relative col-span-7">
        <div className="lg:h-[420px] text-center lg:text-left">
          <h1 className="lg:hidden text-3xl font-semibold -mt-4">Solciety</h1>
          <div className="md:hidden relative -mt-14">
            <Image
              src={"/assets/common/ghosty.png"}
              width={1024}
              height={48}
              alt="hero"
            />
          </div>
          <h1 className="hidden lg:block text-5xl font-bold">
            Welcome to Solciety
          </h1>
          <p className="text-xl mt-4 text-justify leading-relaxed">
            Solciety is a revolutionary decentralized social media platform
            built on the cutting-edge Solana blockchain. As the digital world
            evolves, so does the need for a more secure, transparent, and
            user-centric social experience. Solciety harnesses the power of
            blockchain technology to empower users with full control over their
            data, while also providing a seamless and rewarding social
            networking experience.
          </p>
        </div>
        <div className="hidden md:block relative md:absolute top-0 md:top-32 left-0">
          <Image
            src={"/assets/common/ghosty.png"}
            width={1024}
            height={48}
            alt="hero"
          />
        </div>
      </div>
      <div className="relative col-span-5">
        <div className="relative mt-10 md:mt-0">
          <div className="relative md:absolute top-0 left-0">
            <Image
              src={"/assets/common/connect-wallet.png"}
              width={270}
              height={48}
              alt="hero"
            />
          </div>
          <div className="absolute top-0 right-0">
            <Image
              src={"/assets/common/profile.png"}
              width={270}
              height={48}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
