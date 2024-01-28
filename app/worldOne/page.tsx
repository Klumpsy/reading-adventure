"use client";
import { Grid, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import poisData from "../poisTes.json";
import POIMarker from "@/components/POI/POIMarker";
import { POIModal } from "@/components/POI/POIModal";
import { renderQuestionContent } from "@/helpers/QuestionContentHelper";
import Link from "next/link";

export default function Home() {
  const [pois, setPois] = useState(poisData);
  const [open, setOpen] = useState(false);
  const [selectedPoi, setSelectedPoi] = useState(null);

  const handlePoiClick = (poi) => {
    setSelectedPoi(poi);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const calculatePosition = (coordinates) => {
    const gridSize = 100;
    const imageWidth = 700;
    const imageHeight = 700;

    const x = (coordinates[0] / gridSize) * imageWidth;
    const y = (coordinates[1] / gridSize) * imageHeight;

    return { left: x, top: y };
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", position: "relative" }}
    >
      <Grid item>
        <Link
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="contained" color="primary">
            Terug naar overzicht
          </Button>
        </Link>
        <h1>Wereld 1</h1>
      </Grid>
      <Grid item>
        <div style={{ position: "relative" }}>
          <Image
            width={700}
            height={700}
            src="/assets/images/background_clear.png"
            alt="Interactive 3D Landscape"
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          />
          {pois.map((poi) => (
            <POIMarker
              key={poi.id}
              poi={poi}
              onClick={handlePoiClick}
              calculatePosition={calculatePosition}
            />
          ))}
        </div>
        <POIModal
          open={open}
          handleClose={handleClose}
          selectedPoi={selectedPoi}
          renderQuestionContent={renderQuestionContent}
        />
      </Grid>
    </Grid>
  );
}
