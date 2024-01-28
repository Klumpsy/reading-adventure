// components/POIMarker.js
import Image from "next/image";
import { Tooltip } from "@mui/material";
import { renderStars } from "@/helpers/DifficultyHelper";

export const POIMarker = ({ poi, onClick, calculatePosition }) => {
  const { id, title, difficulty, explanation, coordinates } = poi;

  return (
    <Tooltip
      key={id}
      title={
        <>
          <h2>{title}</h2>
          <p>{renderStars(difficulty)}</p>
          <p>{explanation}</p>
        </>
      }
      placement="top"
    >
      <div
        onClick={() => onClick(poi)}
        style={{
          position: "absolute",
          left: calculatePosition(coordinates).left,
          top: calculatePosition(coordinates).top,
          cursor: "pointer",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          width={35}
          height={35}
          src="/assets/images/book.png"
          alt="Point of interest book icon"
          style={{ display: "block" }}
        />
      </div>
    </Tooltip>
  );
};

export default POIMarker;
