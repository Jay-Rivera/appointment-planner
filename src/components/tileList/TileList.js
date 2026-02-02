import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(({ name, ...rest }, index) => (
        <Tile name={name} description={rest} key={index} />
      ))}
    </div>
  );
};
