import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiDrawer from "./component/Drawer/MuiDrawer";

function App() {

  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>
        I want to Become Good Programer
      </MuiTypography>
      <MuiDrawer drawerDirection={"left"} boxWidth={"300px"} menuAlign={"center"} children={"SIDEBAR"} color={"error"} variant={"body1"}/>
    </div>
  );
}

export default App;
