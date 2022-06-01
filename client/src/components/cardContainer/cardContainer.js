import React from "react";
import Card from "../card/card";

const CardContainer = ({ cardlist }) => {
  return (
    <div className="d-flex flex-wrap">
      {cardlist.map((data) => {
        return (
          <Card
            key={data.id}
            img={data.img}
            title={data.title}
            username={data.username}
            account={data.account}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
