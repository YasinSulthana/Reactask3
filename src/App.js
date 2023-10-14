import Colorpick from "./components/colorpick";
import "./App.css";

const Apps = () => {
  const colors = [
    "red",
    "orange",
    "violet",
    "green",
    "blue",
    "yellow",
    "purple",

    "black",
    "pink",
    "skyblue",
    "lightgreen",
    "darkviolet",
    "lightyellow",
    "gray",
  ];

  return (
    <div className="App">
      <Colorpick colors={colors} />
    </div>
  );
};

export default Apps;
