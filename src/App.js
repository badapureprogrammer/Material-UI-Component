import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiCard from "./component/Card/MuiCard";

function App() {

  const printConsole = () => {
    console.log("Hello Arun")
  };

  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>
        I want to Become Good Programer
      </MuiTypography>
      <MuiCard handleClick={printConsole}/>
    </div>
  );
}

export default App;
