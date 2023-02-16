import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import MuiEndButtonIcon from "./component/ButtonIcon/MuiEndButtonIcon";
import MuiStartButtonIcon from "./component/ButtonIcon/MuiStartButtonIcon";

function App() {
  const printConsole = () => {
    console.log("Hello Arun");
  };
  return (
    <div className="Mui-component">
      <MuiStartButtonIcon color={"success"} variant={"outlined"} startIcon={<SendIcon />} isDisable={false} handleClick={printConsole} > Send </MuiStartButtonIcon>
    </div>
  );
}

export default App;
