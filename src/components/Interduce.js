import React from "react";
import Tilt from "react-parallax-tilt";

function Interduce() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          LET ME <p className="text-[#ad50eb]">INTRODUCE</p> MYSELF <p className="text-[#ad50eb]">BRIEFLY</p>
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
              As a seasoned 
              <span className="text-[#ad50eb]"> Blockchain engineer </span> and 
              <span className="text-[#ad50eb]"> FullStack Developer, </span>
              I bring extensive expertise in 
              <span className="text-[#ad50eb]"> Ethereum, DeFi, Dex, Lunchpad, NFT Marketplace, Create Token, Smart Contract, Solana, Corda, Tezos, Cosmos,
              Website, ECommerance, Shopify, WordPress.… </span>🤷‍♂️
            </p>

            <p>
            My technical proficiency extends to frontend technologies such as {" "}
              <span className="text-[#ad50eb]"> TailwindCSS</span>, 
              <span className="text-[#ad50eb]"> MUI</span>,
              <span className="text-[#ad50eb]"> Styled Components </span>
              and
              <span className="text-[#ad50eb]"> various frontend frameworks</span>, 
              allowing me to deliver high-quality, user-centric solutions. 🔥
            </p>

            <p>
            {" "}
            </p>

            <p>
              With a strong commitment to excellence, 
              I offer a comprehensive range of services, including 
              <span className="text-[#ad50eb]"> Web 2.0 development, </span> And{" "}
              <span className="text-[#ad50eb]">TypeScript frameworks, </span>
              and 
              <span className="text-[#ad50eb]"> Web3.0 blockchain solutions </span>. 🔥
            </p>

            <p>
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <span className="text-[#ad50eb]">Modern Javascript Library</span>{" "}
              and <span className="text-[#ad50eb]">Frameworks </span>
              like
              <span className="text-[#ad50eb]"> React.js, Next.js</span> and <span className="text-[#ad50eb]"> Angular.js</span> 🔥
            </p>

            <p>
              My dedication to customer satisfaction is evident through my commitment to 
              <span className="text-[#ad50eb]"> project demonstration</span>, <span className="text-[#ad50eb]">active support</span>, 
              and <span className="text-[#ad50eb]">free maintenance and support</span>, <span className="text-[#ad50eb]">reflecting my focus </span>
              on building long-term partnerships with clients. ❤️
            </p>

            <p>
              I am passionate about leveraging innovation and staying abreast of the latest trends in 
              <span className="text-[#ad50eb]"> blockchain</span> and <span className="text-[#ad50eb]">software development </span>
              to deliver cutting-edge solutions that exceed client expectations. ❤️
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="man.png" alt="" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Interduce;
