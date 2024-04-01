import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
      <ProjectCard
          name={"DApp Development"}
          image={"/project/img1.png"}
          about={
            "I can help you to develop your DApp Such as DeFi, Dex, NFT MarketPlace and NFT Game on EVM, Solana, SEI and Cosmos chain. And also I can develop smart contract on any chains"
          }
        />
        <ProjectCard
          name={"Token Creating"}
          image={"/project/img2.png"}
          about={
            "I have rich experiences in Token Creating, Minting, Staking, Vesting and Launching such as ERC20, ERC 404, ERC 721, SPL token(solana token), Token 2022, NFT and Meme Coin."
          }
        />
        <ProjectCard
          name={"Non-Fungible Tokens"}
          image={"/project/img3.png"}
          about={
            "I can help you to build NFT Marketplace, Fork Lauchpad, NFT Minting, NFT Staking, Presale on Solana, EVM and Other Chains"
          }
        />
        <ProjectCard
          name={"Blog Website"}
          image={"/project/img4.png"}
          about={
            "You can write and read blogs in it and it is built on NextJS, its backend uses mongodb. And it is also mobile responsive"
          }
        />
        <ProjectCard
          name={"Imagzen 🖼️"}
          image={"/project/img5.png"}
          about={
            "Meet IMAGZEN – the responsive image download app that lets you search and download images with ease."
          }
        />
        <ProjectCard
          name={"NextJs E commerce 🏪"}
          image={"/project/img6.png"}
          about={
            "You can order clothes and create your own products and it is built on NextJS, its backend uses MongoDB. And it is also mobile responsive. And Test Account is = test@gmail.com and password = test4321"
          }
        />
        <ProjectCard
          name={"ChatGPT Clone 💬"}
          image={"/project/img7.png"}
          about={
            "Similar to chatGPT, this platform is designed to assist users in addressing their queries. It's an excellent resource to tackle any code-related issue or inquiry you may have."
          }
        />
      </div>
    </div>
  );
}

export default Project;
