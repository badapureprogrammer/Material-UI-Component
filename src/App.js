import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import MuiButtonIcon from "./component/ButtonIcon/MuiButtonIcon";

function App() {
  const printConsole = () => {
    console.log("Hello Arun");
  };
  return (
    <div className="Mui-component">
      <MuiButtonIcon color={"error"} handleClick={printConsole} isDisable={false} btnIcon={<SendIcon />} />
    </div>
  );
}

export default App;
