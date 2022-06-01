import React from "react";

const Card = ({ img, title, username, account }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-0 m-0">
      <div className="shadow m-2 m-md-3 rounded">
        <img className="card-img-top" src={img} alt="check badge" />
        <div className="card-body rounded-bottom bg-black">
          <h4 className="card-title text-white">{title}</h4>
          <button type="button" className="btn btn-grey py-1">
            <p className="text-white m-0">{username}</p>
            <p className="text-secondary m-0">{account}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
