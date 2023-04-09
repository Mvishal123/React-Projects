import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div>
      {data?.map((user, i) => {
        return (
          <Card
            key={i}
            name={data[i].name}
            math={data[i].math}
            english={data[i].english}
            science={data[i].science}
          />
        );
      })}
    </div>
  );
};

export default CardList;
