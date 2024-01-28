"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";

const MarkWordsQuestionType = ({ text, question }) => {
  const words = text.split(/\s+/);
  const [markedWords, setMarkedWords] = useState({});

  const toggleMark = (index) => {
    setMarkedWords((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSubmit = () => {
    const markedIndices = Object.entries(markedWords)
      .filter(([_, isMarked]) => isMarked)
      .map(([index]) => parseInt(index));
    console.log("Marked words indices:", markedIndices);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <div className="markedTextContainer">
        {words.map((word, index) => (
          <span
            key={index}
            onClick={() => toggleMark(index)}
            style={{
              cursor: "pointer",
              backgroundColor: markedWords[index] ? "orange" : "transparent",
              fontWeight: markedWords[index] ? 500 : 300, // Change to camelCase
              margin: "0 2px",
            }}
          >
            {word}
          </span>
        ))}
      </div>
      <Button
        onClick={handleSubmit}
        color={"success"}
        variant={"contained"}
        className="submit_button"
      >
        Lever in
      </Button>
    </div>
  );
};

export default MarkWordsQuestionType;
