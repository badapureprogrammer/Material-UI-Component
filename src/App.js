import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiAutoComplete from "./component/AutoComplete/MuiAutoComplete";

function App() {

  const skills = ["HTML5", "CSS3", "Bootstrap", "Javascript", "SASS"];

  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>I want to Become Good Programer</MuiTypography>
      <MuiAutoComplete boxWidth={"350px"} size={"small"} menuList={skills} isMultiple={true} label={"Subject"}/>
    </div>
  );
}

export default App;
