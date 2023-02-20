import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiBox from "./component/Grid/MuiGridLayout";


function App() {

  const skills = ["HTML5", "CSS3", "Bootstrap", "Javascript", "SASS"];

  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>I want to Become Good Programer</MuiTypography>
      <MuiBox/>
    </div>
  );
}

export default App;
