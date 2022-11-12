import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (props) => {
  return (
    <div>
      <div>
        <div className="card">
          <div className="top">
            <p> {props.notkey} </p>
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img} />
          </div>
          <div className="bottom">
            <Detail detailInfo={props.tel} />
            <Detail detailInfo={props.email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
