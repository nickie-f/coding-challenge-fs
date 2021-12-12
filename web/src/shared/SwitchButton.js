import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { StyledButton } from "./utils/style";

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
      <StyledButton onClick={onClick} theme={theme.state}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </StyledButton>
  );
}
