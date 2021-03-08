import React from "react";

const ImageCard = ({ item }) => {
  const tags = item.tags.split(",");

  const maxTagLength = (item) => {
    if (item.length < 10) {
      return `${item}`;
    } else {
      console.log(item);
    }
  };

  return (
    <div>
      <img src={item.webformatURL} alt="" />
      <div>{item.user}</div>
      <div>{item.views}</div>
      <div>{item.likes}</div>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>{maxTagLength(tag)}</span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
