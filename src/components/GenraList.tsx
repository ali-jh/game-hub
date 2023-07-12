import React from "react";
import useGenra from "../hooks/useGenra";

const GenraList = () => {
  const { data } = useGenra();
  return (
    <>
      <ul>
        {data.map((genra) => (
          <li key={genra.id}>{genra.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenraList;
