import Head from "next/head";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>FAQ - Solciety</title>
        <meta
          name="description"
          content="A messaging platform for Web3 users to simply and instantly messaging across wallet-to-wallet on the Blockchain network."
        />
      </Head>
      <div className="px-4 md:px-0 pt-4">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
          <Nav />
          <div className="mt-10 px-4">
            <p className="text-center text-3xl font-semibold">
              Frequently Asked Questions
            </p>
            <p className="text-center text-lg mt-2">
              Our pick list for frequently asked questions
            </p>
            <div className="max-w-3xl mx-auto mt-10">
              <div>
                <p className="text-xl font-semibold">What is Solciety?</p>
                <p className="text-[15px] mt-2 text-justify">
                  Solciety is a Web3 social media platform that leverages the
                  Solana blockchain for posting, commenting, and following
                  processes in a decentralized manner.
                </p>
              </div>
              <div className="w-full h-0.5 my-8 bg-solana-green text-solana-green" />
              <div>
                <p className="text-xl font-semibold">
                  What is the cost of using Solciety?
                </p>
                <p className="text-[15px] mt-2 text-justify">
                  The average cost for posting is 0.01 SOL, while commenting and
                  following other users are more affordable at 0.001 SOL. Users
                  need to have a minimum balance of 0.2 SOL to initiate the
                  posting process.
                </p>
              </div>
              <div className="w-full h-0.5 my-8 bg-solana-green text-solana-green" />
              <div>
                <p className="text-xl font-semibold">
                  How can I join Solciety?
                </p>
                <p className="text-[15px] mt-2 text-justify">
                  Joining Solciety is straightforward. You simply connect your
                  wallet to the Solana network, and you{"'"}re ready to start
                  using the platform. Everyone is welcome to join.
                </p>
              </div>
              <div className="w-full h-0.5 my-8 bg-solana-green text-solana-green" />
              <div>
                <p className="text-xl font-semibold">
                  How does Solciety protect user data?
                </p>
                <p className="text-[15px] mt-2 text-justify">
                  Solciety stores data in a decentralized manner, particularly
                  posts, comments, and user following. This means your data is
                  secure and shielded from third-party control.
                </p>
              </div>
              <div className="w-full h-0.5 my-8 bg-solana-green text-solana-green" />
              <div>
                <p className="text-xl font-semibold">
                  How does the NFT minting process work in Solciety?
                </p>
                <p className="text-[15px] mt-2 text-justify">
                  The NFT minting process is carried out using the Candy Machine
                  tool from Metaplex. Users can mint NFTs at a price of 0.1 SOL
                  Devnet and will receive a verified badge and an automatically
                  generated NFT profile picture upon completion of the minting
                  process.
                </p>
              </div>
              <div className="w-full h-0.5 my-8 bg-solana-green text-solana-green" />
              <div>
                <p className="text-xl font-semibold">What is get verified??</p>
                <p className="text-[15px] mt-2 text-justify">
                  Solciety also provides NFT services priced at 0.1 SOL Devnet,
                  granting users a verified badge and automatically changing
                  their profile picture into a minted NFT.
                </p>
              </div>
              <div className="w-full h-0.5 my-8 bg-solana-green text-solana-green" />
              <div>
                <p className="text-xl font-semibold">
                  What{"'"}s in store for Solciety in the future?
                </p>
                <p className="text-[15px] mt-2 text-justify">
                  Solciety has plans for ongoing development, with the addition
                  of new features and updates. So, you can look forward to more
                  exciting features in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FaqPage;
