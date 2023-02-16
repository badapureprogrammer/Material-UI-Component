import "./App.css";
import MuiAndroidSwitch from "./component/Switch/AndroidSwitch/MuiAndroidSwitch";
import MuiIconSwitch from "./component/Switch/IconSwitch/MuiIconSwitch";

function App() {
  return (
    <div className="Mui-component">
      <MuiAndroidSwitch label={"Status"} labelDirection={"top"}/>
      <MuiIconSwitch label={"Status"} labelDirection={"top"}/>
    </div>
  );
}

export default App;
