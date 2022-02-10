import "./App.scss";
import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import beers from "./data/beer";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
        <Main
          beersArr = {beers}
        />
    </div>
  );
};

export default App;
