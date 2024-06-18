// FloatingButton.jsx
import React, { useState } from "react";
import { Fab, Zoom, Box } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/HelpOutline"; // Import a question mark icon
import styled from "@emotion/styled";

const FabContainer = styled(Box)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FabLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEE;
  border-radius: 16px;
  padding: 7px 40px;
  margin-bottom: 8px;
  gap: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  cursor: pointer;
`;

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleHelpClick = () => {
    window.location.href = "https://www.imenu.com.ar/instrucciones";
  };

  const handleFeedbackClick = () => {
    window.location.href = "https://forms.gle/TBoz8pB9yR96oe8j6";
  };

  return (
    <FabContainer>
      <Zoom in={open}>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <FabLabel onClick={handleHelpClick}>
            Centro de ayuda <span role="img" aria-label="thinking">🤔</span>
          </FabLabel>
          <FabLabel onClick={handleFeedbackClick} style={{ padding: '7px 35px' }}>
            Dejanos tu opinión <span role="img" aria-label="star">⭐</span>
          </FabLabel>
        </Box>
      </Zoom>
      <Fab
        color="default"
        onClick={handleClick}
        style={{
          backgroundColor: "#FF4747",
          color: "white",
          fontSize:"22px",
        }}
      >?
      </Fab>
    </FabContainer>
  );
};

export default FloatingButton;
