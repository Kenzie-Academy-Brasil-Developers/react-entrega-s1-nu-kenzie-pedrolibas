import { useState } from "react";
import "./style.css";

const Filter = ({ newArr, setArr }) => {
  const [all, setAll] = useState(true);
  const [entrance, setEntrance] = useState(false);
  const [expenses, setExpenses] = useState(false);

  function filterEntrance() {
    setArr(newArr.filter((elem) => elem.type === "Entrada"));
    setEntrance(true);
    setExpenses(false);
    setAll(false);
  }

  function filterExpenses() {
    setArr(newArr.filter((elem) => elem.type === "Despesa"));
    setExpenses(true);
    setAll(false);
    setEntrance(false);
  }

  function filterAll() {
    setArr(newArr);
    setAll(true);
    setEntrance(false);
    setExpenses(false);
  }

  return (
    <div className="resume">
      <h2>Resumo financeiro</h2>
      <div className="buttons-filter">
        <button
          className="filter"
          onClick={filterAll}
          style={{
            backgroundColor: all ? "var(--color-pink)" : "var(--color-grey-2)",
            color: all ? "var(--color-white)" : "var(--color-grey-3)",
          }}
        >
          Todos
        </button>
        <button
          className="filter"
          onClick={filterEntrance}
          style={{
            backgroundColor: entrance
              ? "var(--color-pink)"
              : "var(--color-grey-2)",
            color: entrance ? "var(--color-white)" : "var(--color-grey-3)",
          }}
        >
          Entradas
        </button>
        <button
          className="filter"
          onClick={filterExpenses}
          style={{
            backgroundColor: expenses
              ? "var(--color-pink)"
              : "var(--color-grey-2)",
            color: expenses ? "var(--color-white)" : "var(--color-grey-3)",
          }}
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default Filter;
