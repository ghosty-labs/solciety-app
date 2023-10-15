import Image from "next/image";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-40 px-4 md:px-0">
      <div className="flex flex-col gap-y-2">
        <p>Coming Soon on</p>
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
        <p className="text-sm">
          status:{" "}
          <span className="text-solana-green">In Review by Play Store</span>
        </p>
      </div>
    </div>
  );
};

export default DownloadApp;
