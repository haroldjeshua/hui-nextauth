import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Categories</span> we think you'll like
      </h2>

      {/* Grid */}
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-x-2 gap-y-4 py-2">
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
          title="Valorant"
          viewers="69K viewers"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/515025-188x250.jpg"
          title="Overwatch 2"
          viewers="58.2K viewers"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg"
          title="DOTA 2"
          viewers="51.2K viewers"
          tag1="MOBA"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/513181-188x250.jpg"
          title="Genshin Impact"
          viewers="27.8K viewers"
          tag1="RPG"
          tag2="Action"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpgg"
          title="Apex Legends"
          viewers="39.6K viewers"
          tag1="FPS"
          tag2="Shooter"
        />
      </div>
    </div>
  );
};

export default Categories;
