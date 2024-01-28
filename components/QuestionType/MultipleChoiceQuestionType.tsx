import React from "react";
import { Button } from "@mui/material";

const MultipleChoiceQuestionType = ({ options }) => {
  const optionLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const handleAnswerClick = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <div>
      {options.map((option, index) => (
        <Button
          key={index}
          variant="contained"
          sx={{ margin: 1 }}
          onClick={() => handleAnswerClick(option)}
        >
          {optionLabels[index]}. {option}
        </Button>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestionType;
