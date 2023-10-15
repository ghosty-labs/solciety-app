import Image from "next/image";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-40 px-4 md:px-0">
      <div className="xl:flex justify-between gap-y-2">
        <div className="mb-20 xl:mb-0">
          <p className="mb-8 font-bold">Coming Soon on</p>
          <Link
            href={"https://play.google.com/apps/test/com.solcietymobileapp/10"}
            target="_blank"
          >
            <Image
              src={"/assets/common/play-store.png"}
              width={250}
              height={48}
              alt="solciety-app-on-play-store"
            />
          </Link>
          <p className="text-sm mt-2">
            status:{" "}
            <span className="text-solana-green">In Review by Play Store</span>
          </p>
        </div>
        <div>
          <p className="font-bold">Built with</p>
          <div className="xl:flex gap-x-10">
            <div className="flex justify-center">
              <Link
                href={"https://solanamobile.com/developers"}
                target="_blank"
              >
                <Image
                  src={"/assets/stack/solana-mobile-stack.png"}
                  width={250}
                  height={48}
                  alt="solciety-app-on-play-store"
                />
              </Link>
            </div>
            <div className="flex justify-center mb-4 xl:mb-0 xl:mr-10">
              <Link href={"https://www.anchor-lang.com/"} target="_blank">
                <Image
                  src={"/assets/stack/anchor.png"}
                  width={80}
                  height={48}
                  alt="solciety-app-on-play-store"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href={"https://www.metaplex.com/"} target="_blank">
                <Image
                  src={"/assets/stack/metaplex.jpeg"}
                  width={180}
                  height={48}
                  alt="solciety-app-on-play-store"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
