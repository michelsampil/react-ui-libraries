import "./App.css";
import { ButtonAntD } from "./ant-design-components/ButtonAntD";
import { ButtonMui } from "./mui-components/ButtonMui";
import { Input } from "./mui-components/Input";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FlightIcon from "@mui/icons-material/Flight";
import { FastBackwardOutlined, FastForwardOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CustomButton } from "./ant-design-components/CustomButton";
import { CustomSectionWithTheme } from "./ant-design-components/CustomSectionWithTheme";
import { MUISectionWithTheme } from "./mui-components/MUISectionWithTheme";
function App() {
  return (
    <div className="container">
      <h2> MUI </h2>
      <ButtonMui startIcon={<AcUnitIcon />} />
      <Input />
      <AcUnitIcon />
      <FlightIcon />
      <MUISectionWithTheme />
      <h2> Ant Design </h2>
      <ButtonAntD />
      <FastBackwardOutlined />
      <FastForwardOutlined />
      <Button type="primary" icon={<ShoppingCartOutlined />}>
        Add to Cart!
      </Button>
      <CustomButton />
      <CustomSectionWithTheme />
    </div>
  );
}

export default App;
