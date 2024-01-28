"use client";

import { useState } from "react";
import { Box, Modal, IconButton, MobileStepper, Button } from "@mui/material";
import Image from "next/image";
import { renderStars } from "@/helpers/DifficultyHelper";

export const POIModal = ({
  open,
  handleClose,
  selectedPoi,
  renderQuestionContent,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="poi-modal-title"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "80%",
          height: "80%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <div>
            <span className="difficulty_stars">
              {renderStars(selectedPoi?.difficulty)}
            </span>
            {activeStep !== 0 && (
              <Button
                onClick={() => setActiveStep(0)}
                sx={{ mt: 2, position: "absolute", left: 0 }}
              >
                <Image
                  width={35}
                  height={35}
                  src="/assets/images/book.png"
                  alt="Point of interest book icon"
                  style={{ display: "block" }}
                />
              </Button>
            )}
          </div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            X
          </IconButton>
          <h2 style={{ flexGrow: 1, textAlign: "center", color: "black" }}>
            {selectedPoi?.title}
          </h2>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Display text or question based on activeStep */}
          {activeStep === 0 ? (
            <p className="main_text">{selectedPoi?.text}</p>
          ) : (
            <>
              <p class="text_question">
                {selectedPoi?.questions[activeStep - 1]?.question}
              </p>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {activeStep === 0 ? (
                  <p className="main_text">{selectedPoi?.text}</p>
                ) : (
                  selectedPoi?.questions.map((question, index) => (
                    <div
                      key={index}
                      style={{
                        display: activeStep - 1 === index ? "block" : "none",
                      }}
                    >
                      <p className="text_question">{question.question}</p>
                      {renderQuestionContent(question, selectedPoi.text)}
                    </div>
                  ))
                )}
              </Box>
            </>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          <MobileStepper
            variant="dots"
            steps={selectedPoi?.questions.length + 1}
            position="static"
            activeStep={activeStep}
            sx={{
              flexGrow: 0,
              "& .MuiMobileStepper-dot": {
                width: "10px",
                height: "10px",
                margin: "0 4px",
                cursor: "pointer",
              },
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: "secondary.main",
              },
            }}
            backButton={
              <Button onClick={handleBack} disabled={activeStep === 0}></Button>
            }
            nextButton={
              <Button
                onClick={handleNext}
                disabled={activeStep === selectedPoi?.questions.length}
              ></Button>
            }
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              Vorige vraag
            </Button>
            <Button
              onClick={handleNext}
              disabled={activeStep === selectedPoi?.questions.length}
            >
              Volgende vraag
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
