import { TextField, Button } from "@mui/material";
import React, { useState } from "react"; // Import useState hook

const OpenAnswerQuestionType = () => {
  const [answer, setAnswer] = useState(""); // Corrected function name to setAnswer

  const handleSubmit = () => {
    console.log(answer); // Log the current state of the answer
  };

  return (
    <div>
      <TextField
        multiline
        minRows={3}
        maxRows={4}
        placeholder="Typ je antwoord hier.."
        variant="outlined"
        fullWidth
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{
          maxWidth: "700px",
          minHeight: "300px",
          "& .MuiOutlinedInput-root": {
            padding: "10px",
            "& fieldset": {
              "&:focus": {
                borderColor: "primary.main",
              },
            },
          },
        }}
      />
      <Button
        onClick={handleSubmit}
        color="success"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Lever in
      </Button>
    </div>
  );
};

export default OpenAnswerQuestionType;
