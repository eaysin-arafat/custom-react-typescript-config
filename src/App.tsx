import image from "./assets/image.jpg";
import "./style.css";

const App = () => {
  return (
    <>
      <div className="app">Hello World! {process.env.NODE_ENV}</div>
      <img src={image} alt="" />
    </>
  );
};

export default App;
