import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalValue from "../TotalValue";
import { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

const HomePage = ({ setIndexPage }) => {
  const [arrCard, setArrCard] = useState([]);
  const [newArr, setNewArr] = useState([]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <Header setIndexPage={setIndexPage} />
        <div className="container">
          <div className="infos">
            <Form setArr={setArrCard} setNewArr={setNewArr} />
            {newArr.length > 0 && <TotalValue arr={newArr} />}
          </div>
          <List
            arr={arrCard}
            setArr={setArrCard}
            newArr={newArr}
            setNewArr={setNewArr}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
