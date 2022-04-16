import React from "react";
import Tile from '../tile/Tile'

export const TileList = (props) => {
  console.log(props);
  return (
    <div>
      {props.data.length > 0 && props.data.map( (value, index) => <Tile key={index} value={value}/>)}     
    </div>
  );
};