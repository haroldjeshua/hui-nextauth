import React from "react";
portport;

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Categories</span> we think you'll like
      </h2>

      {/* Grid */}
      <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2"></div>
    </div>
  );
};

export default Categories;
