import {
  IconBell,
  IconBellAlert,
  IconCheckBadge,
  IconPencil,
  IconPicture,
  IconPuzzle,
  IconReply,
  IconSearch,
  IconTag,
  IconUser,
  IconUserPlus,
} from "../Icon";

const Feature = () => {
  return (
    <div className="max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-40 px-4 md:px-0">
      <p className="text-2xl font-semibold">Features</p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconPencil size={32} color="white" />
          <p className="mt-4 font-bold">
            Posting
            <span className="border-2 border-solana-green text-solana-green rounded-md text-[10px] text-semibold px-1 py-0.5 ml-2">
              On-Chain
            </span>
          </p>
          <p className="mt-1 text-justify">
            Post your ideas and experiences on-chain and decentralized on the
            Solana blockchain.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconReply size={32} color="white" />
          <p className="mt-4 font-bold">
            Replies
            <span className="border-2 border-solana-green text-solana-green rounded-md text-[10px] text-semibold px-1 py-0.5 ml-2">
              On-Chain
            </span>
          </p>
          <p className="mt-1 text-justify">
            Enjoy comments on other user{"'"}s posts with on-chain Solana
            blockchain.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconPicture size={32} color="white" />
          <p className="mt-4 font-bold">
            Send Pictures
            <span className="border-2 border-yellow-200 text-yellow-200 rounded-md text-[10px] text-semibold px-1 py-0.5 ml-2">
              Upcoming
            </span>
          </p>
          <p className="mt-1 text-justify">
            Post with pictures and share with your experiences.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconUser size={32} color="white" />
          <p className="mt-4 font-bold">Edit Profile</p>
          <p className="mt-1 text-justify">
            Add a bio to your profile about who you are to other users.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconTag size={32} color="white" />
          <p className="mt-4 font-bold">Set Alias</p>
          <p className="mt-1 text-justify">
            Replace the name of your address with the name you want.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconBell size={32} color="white" />
          <p className="mt-4 font-bold">Notifications</p>
          <p className="mt-1 text-justify">
            Receive notifications in the application such as likes, comments,
            and also follows.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconBellAlert size={32} color="white" />
          <p className="mt-4 font-bold">
            Push Notifications
            <span className="border-2 border-yellow-200 text-yellow-200 rounded-md text-[10px] text-semibold px-1 py-0.5 ml-2">
              Upcoming
            </span>
          </p>
          <p className="mt-1 text-justify">
            Get instant, personalized alerts on your mobile with our push
            notifications!
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconUserPlus size={32} color="white" />
          <p className="mt-4 font-bold">
            Follow
            <span className="border-2 border-solana-green text-solana-green rounded-md text-[10px] text-semibold px-1 py-0.5 ml-2">
              On-Chain
            </span>
          </p>
          <p className="mt-1 text-justify">
            Experience on-chain follows on Solana for seamless, trustless
            connections in the blockchain world.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconPuzzle size={32} color="white" />
          <p className="mt-4 font-bold">
            Mint NFT
            <span className="border-2 border-solana-green text-solana-green rounded-md text-[10px] text-semibold px-1 py-0.5 ml-2">
              On-Chain
            </span>
          </p>
          <p className="mt-1 text-justify">
            Metaplex allows you to mint NFTs, creating unique digital assets on
            the blockchain effortlessly.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconCheckBadge size={32} color="white" />
          <p className="mt-4 font-bold">Verified</p>
          <p className="mt-1 text-justify">
            Verified is a blue checkmark to an account, showing it{"'"}s genuine
            and official on a platform or social media.
          </p>
        </div>
        <div className="p-8 mb-6 border-2 border-solana-green rounded-xl">
          <IconSearch size={32} color="white" />
          <p className="mt-4 font-bold">Search Post</p>
          <p className="mt-1 text-justify">
            Search feature simplifies finding post or topics on the Solciety for
            easy exploration and connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
