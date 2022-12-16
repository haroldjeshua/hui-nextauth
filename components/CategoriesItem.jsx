import Image from "next/image";
import React from "react";

const CategoriesItem = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className="p-0">
      <div className="relative w-full overflow-hidden">
        <div className="py-[66%] px-[50%]">
          <Image
            src={img}
            width="256"
            height="400"
            alt="/"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-500 py-[2px]">{viewers}</p>
        <div className="flex gap-1">
          <div>
            <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
              {tag1}
            </p>
          </div>
          <div>
            {tag2 ? (
              <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
                {tag2}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItem;
