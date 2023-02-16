import "./App.css";
import MuiCheckboxIcon from "./component/Checkbox/MuiCheckboxIcon";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function App() {
  const printConsole = () => {
    console.log("Hello Arun");
  };
  return (
    <div className="Mui-component">
      <MuiCheckboxIcon size={"small"} color={"error"} isDisable={false} borderIcon={<BookmarkBorderIcon />} checkIcon={<BookmarkIcon />} />
    </div>
  );
}

export default App;
