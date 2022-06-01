import React, { useState, useEffect } from "react";
import ButtonRow from "../buttonRow/buttonRow";
import CardContainer from "../cardContainer/cardContainer";

const API_URL = "https://nft-live-spaces.herokuapp.com/api/data";

const Body = (props) => {
  const [activebtnid, setactivebtnid] = useState(1);
  const [nftData, setNftData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const nft_data = await response.json();
    setNftData(nft_data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ButtonRow
        datalist={nftData || []}
        activebtnid={activebtnid}
        setactivebtnid={setactivebtnid}
      />
      {nftData.length === 0 ? (
        "Loading..."
      ) : (
        <CardContainer cardlist={nftData[activebtnid - 1].content} />
      )}
    </div>
  );
};

export default Body;
