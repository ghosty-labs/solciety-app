import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20 py-4 border-t border-solana-green">
      <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-4 md:mx-auto md:flex justify-between">
        <div className="pt-4">
          <p className="text-sm">
            Solciety 2023 <span className="mx-1 text-solana-green">|</span> Made
            with love in Earth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
