import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const ImageCard = ({ item }) => {
  const tags = item.tags.split(",");

  console.log(tags.length);

  const maxTagLength = (item) => {
    console.log(item);
    let shorterTag = item.substring(0, 10);
    if (item.length < 10) {
      return `${item}`;
    } else {
      console.log(item);
      return `${shorterTag}...`;
    }
  };

  return (
    <div className="max-w-xs rounded-3xl overflow-hidden shadow-md bg-gradient-to-b from-purple-50 to-purple-100 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-800">
      <img src={item.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-medium text-gray-500 text-sm mt-2">Photo by</div>
        <div className="font-bold text-gray-800 dark:text-gray-100 text-2xl mb-8">
          {item.user}
        </div>
        <div className="border-b-2 border-gray-300 dark:border-gray-600 mb-8"></div>
        <ul className="text-sm flex space-x-9">
          <div className="">
            <li className="flex items-center">
              <AiFillEye
                className="text-gray-500 dark:text-gray-300"
                size={"1.5em"}
              />
              <strong className="text-gray-500 dark:text-gray-300 font-medium ml-1.5 ">
                {item.views}
              </strong>
            </li>
          </div>
          <div className="-ml-20">
            <li className="flex items-center">
              <AiFillHeart
                className="text-gray-500 dark:text-gray-300"
                size={"1.5em"}
              />
              <strong className="text-gray-500 dark:text-gray-300 font-medium ml-1.5">
                {item.likes}
              </strong>
            </li>
          </div>
        </ul>
      </div>
      <div className="px-6 py-4 mt-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gradient-to-r from-purple-400 to-purple-500 rounded-full px-3 py-1 text-sm font-medium text-white mr-2 m-1"
          >
            {maxTagLength(tag)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
