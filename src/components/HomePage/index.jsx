import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalValue from "../TotalValue";
import { useState } from "react";
import "./style.css";

const HomePage = ({ setIndexPage }) => {
  const [arrCard, setArrCard] = useState([]);
  const [newArr, setNewArr] = useState([])

  return (
    <div>
      <Header setIndexPage={setIndexPage} />
      <div className="container">
        <div className="infos">
          <Form setArr={setArrCard} setNewArr={setNewArr} />
          {arrCard.length > 0 && <TotalValue arr={arrCard} />}
        </div>
        <List arr={arrCard} setArr={setArrCard} newArr={newArr} setNewArr={setNewArr}/>
      </div>
    </div>
  );
};

export default HomePage;
