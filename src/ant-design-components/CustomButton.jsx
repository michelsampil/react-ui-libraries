import { Button } from "antd";
import classes from "./CustomButton.module.css";

export const CustomButton = () => {
  const customButtonStyles = {
    backgroundColor: "yellow",
    color: "black",
    borderRadius: "5px",
  };

  return (
    <Button style={customButtonStyles} className={classes["custom-button"]}>
      Custom Button
    </Button>
  );
};
