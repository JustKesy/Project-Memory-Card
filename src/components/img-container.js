import React from "react";

export function Container(props) {
  return (
    <div className="image-container">
      {props.imageList.map((item) => {
        return (
          <img
            className="image-card"
            key={item.id}
            src={item.url}
            id={item.id}
            onClick={props.hit}
          />
        );
      })}
    </div>
  );
}
