import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiBadge from "./component/Badge/MuiBadge";

function App() {
  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>
        I want to Become Good Programer
      </MuiTypography>
      <MuiBadge content={1} color={"warning"} />
    </div>
  );
}

export default App;
