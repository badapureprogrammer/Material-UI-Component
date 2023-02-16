import "./App.css";
import MuiMultiSelelct from "./component/Select/MuiMultiSelelct";

function App() {
  const printConsole = () => {
    console.log("Hello Arun");
  };

  const subjectList = [
    { value: "marathi", name: "Marathi" },
    { value: "english", name: "English" },
  ];
  return (
    <div className="Mui-component">
      <MuiMultiSelelct boxWidth={"300px"} size={"small"} color={"primary"} label={"Select Your Subject"} helperText={"You can choose multiple option"} menuList={subjectList} />
    </div>
  );
}

export default App;

