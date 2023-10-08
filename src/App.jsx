import "./App.css";
import { ButtonAntD } from "./ant-design-components/ButtonAntD";
import { ButtonMui } from "./mui-components/ButtonMui";
import { Input } from "./mui-components/Input";
// import { CustomChip } from "./mui-components/CustomChip";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FlightIcon from "@mui/icons-material/Flight";

function App() {
  return (
    <div className="container">
      <h2> MUI </h2>
      <ButtonMui startIcon={<AcUnitIcon />}> Click me </ButtonMui>
      <Input />
      <AcUnitIcon />
      <FlightIcon />
      <h2> Ant Design </h2>
      <ButtonAntD />
    </div>
  );
}

export default App;
