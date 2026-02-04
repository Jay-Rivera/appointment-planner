import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map(({ name, ...rest }, index) => (
        <Tile name={name} description={rest} key={index} />
      ))}
    </div>
  );
};
