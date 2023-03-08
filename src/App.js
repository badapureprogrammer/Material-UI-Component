import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiTable from "./component/Table/MuiTable";

function App() {
  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>
        I want to Become Good Programer
      </MuiTypography>
      <MuiTable/>
    </div>
  );
}

export default App;
