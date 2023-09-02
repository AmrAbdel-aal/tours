import React, { useState } from "react";

const Tour = (props) => {
  const [isReadMore, setReadMore] = useState(false);
  const { id, image, info, name, price, removeTour } = props;
  return (
    <div className="tour">
      <img src={image} alt="" />
      <span className="price">{price}</span>
      <h3 className="name">{name}</h3>
      {isReadMore ? (
        <p className="info">
          {info}
          <button
            className="readBtn"
            onClick={() => {
              setReadMore(!isReadMore);
            }}
          >
            read less
          </button>
        </p>
      ) : (
        <p className="info">
          {info.substring(0, 200)}
          <button
            className="readBtn"
            onClick={() => {
              setReadMore(!isReadMore);
            }}
          >
            read more
          </button>
        </p>
      )}
      <button
        type="button"
        className="btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Tour;
