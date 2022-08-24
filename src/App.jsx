import { useState } from "react";
import "./styles/App.css";
import HomePage from "./components/HomePage";
import IndexPage from "./components/IndexPage";
import { Toaster } from "react-hot-toast";

function App() {
  const [indexPage, setIndexPage] = useState(false);
  return (
    <div className="App">
      <Toaster/>
      {indexPage ? (
        <HomePage setIndexPage={setIndexPage}/>
      ) : (
        <IndexPage setIndexPage={setIndexPage} />
      )}
    </div>
  );
}

export default App;
