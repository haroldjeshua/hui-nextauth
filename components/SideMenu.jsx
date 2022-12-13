import React from "react";
import { recChannels, topChannels } from "../data/mock-data";
import { RiMovieLine } from "react-icons/ri";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const SideMenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#121212]">
      <div>
        <p className="hidden xl:flex uppercase font-bold text-sm">
          Recommended Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>

      {recChannels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div>
            <Image
              src={item.avatar}
              width="44"
              height="44"
              alt={item.username}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p>{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot size={20} color="red" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
