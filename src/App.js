import "./App.css";
import MuiTypography from "./component/Typography/MuiTypography";
import MuiImageList from "./component/ImageList/MuiImageList";
import TreeImage from "./images/tree_image.jpg";

function App() {
  const imageList = [
    { img: TreeImage, title: "Tree Image1" },
    { img: TreeImage, title: "Tree Image2" },
    { img: TreeImage, title: "Tree Image3" },
    { img: TreeImage, title: "Tree Image1" },
    { img: TreeImage, title: "Tree Image2" },
    { img: TreeImage, title: "Tree Image3" },
  ];

  return (
    <div className="Mui-component">
      <MuiTypography color={"error"} variant={"h5"} weight={300}>
        I want to Become Good Programer
      </MuiTypography>
      <MuiImageList
        imageList={imageList}
        cols={3}
        boxWidth={"80%"}
        loadingVariant={"lazy"}
      />
    </div>
  );
}

export default App;
