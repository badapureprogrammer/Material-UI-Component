import "./App.css";
import MuiRedioButton from "./component/RadioButton/MuiRedioButton";

function App() {
  const printConsole = () => {
    console.log("Hello Arun");
  };

  const subjectList = [
    {
      value: "marathi",
      name: "Marathi",
    },
    {
      value: "english",
      name: "English",
    },
  ];
  return (
    <div className="Mui-component">
      <MuiRedioButton
        isError={false}
        formLabel={"Subject"}
        isRow={false}
        menuList={subjectList}
        size={"small"}
        color={"error"}
        helperText={"Choose your favourite subject"}
      />
    </div>
  );
}

export default App;
