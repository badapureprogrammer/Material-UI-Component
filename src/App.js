import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiAutoComplete from "./component/AutoComplete/MuiAutoComplete";

function App() {
  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>I want to Become Good Programer</MuiTypography>
      <MuiAutoComplete boxWidth={"300px"}/>
    </div>
  );
}

export default App;
