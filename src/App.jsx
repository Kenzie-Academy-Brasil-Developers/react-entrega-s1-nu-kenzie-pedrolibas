import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import IndexPage from "./components/IndexPage";

function App() {
  const [indexPage, setIndexPage] = useState(false);
  return (
    <div className="App">
      {indexPage ? (
        <HomePage setIndexPage={setIndexPage}/>
      ) : (
        <IndexPage setIndexPage={setIndexPage} />
      )}
    </div>
  );
}

export default App;
