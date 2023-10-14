import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <div className="flex justify-between items-center gap-2">
          <Image
            src={"/assets/logo/solciety.png"}
            width={128}
            height={48}
            alt="solciety-logo"
          />
        </div>
      </Link>
      <div className="flex">
        <button className="px-6 py-2 rounded-md font-semibold text-solana-green bg-primary-black hover:bg-opacity-90 transition duration-200">
          Docs
        </button>
        <button className="px-6 py-2 rounded-md font-semibold text-solana-green bg-primary-black hover:bg-opacity-90 transition duration-200">
          FAQs
        </button>
      </div>
    </div>
  );
};

export default Nav;
