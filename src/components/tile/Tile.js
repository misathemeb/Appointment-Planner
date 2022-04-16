import React from "react";

const Tile = (props) => {


  let values = Object.values(props.value);
  console.log(values);
  
  return (
    <div className="tile-container">
      
      <p className="tile-title" key={0}>{values[0]}</p>
      {values && values.length && values.slice(1).map((value, index) => {
         return <p className="tile" key={index}>{value}</p>
      })}
   
      
    </div>
  );
};

export default Tile;