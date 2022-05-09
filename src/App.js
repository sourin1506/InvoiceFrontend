import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="HeaderContainer">
        <h5 className="Table_Header">Invoice </h5>
      </div>
      <Table />
    </div>
  );
}

export default App;
