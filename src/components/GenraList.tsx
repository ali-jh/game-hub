import React from "react";
import useGenra from "../hooks/useGenra";

const GenraList = () => {
  const { genras } = useGenra();
  return (
    <>
      <ul>
        {genras.map((genra) => (
          <li key={genra.id}>{genra.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenraList;
