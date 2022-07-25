import { useState } from "react";
import "./style.css";

const List = ({ arr, setArr, newArr, setNewArr }) => {
  const [all, setAll] = useState(true);
  const [entrance, setEntrance] = useState(false);
  const [expenses, setExpenses] = useState(false);

  function removeCard(id) {
    setArr((old) => old.filter((elem, index) => (index !== id ? elem : null)));
    setNewArr((old) => old.filter((elem, index) => (index !== id ? elem : null)))
  }

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
    <ul>
      {arr.length > 0 ? (
        <>
          <div className="resume">
            <h2>Resumo financeiro</h2>
            <div className="buttons-filter">
              <button
                className="filter"
                onClick={filterAll}
                style={{
                  backgroundColor: all
                    ? "var(--color-pink)"
                    : "var(--color-grey-2)",
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
                  color: entrance
                    ? "var(--color-white)"
                    : "var(--color-grey-3)",
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
                  color: expenses
                    ? "var(--color-white)"
                    : "var(--color-grey-3)",
                }}
              >
                Despesas
              </button>
            </div>
          </div>
          {arr.map((elem, index) => (
            <li
              key={index}
              className="card"
              style={{
                borderLeft:
                  elem.type === "Entrada"
                    ? "5px solid green"
                    : "5px solid grey",
              }}
            >
              <div className="info-card">
                <h2 className="title-card">{elem.description}</h2>
                <span className="value-card">R$ {elem.value}</span>
                <div className="remove">
                <buttom
                  className="remove-card"
                  onClick={() => removeCard(index)}
                >
                  🗑
                </buttom>
                </div>
              </div>
              <div className="type-span">
                <span className="type-card">{elem.type}</span>
              </div>
            </li>
          ))}
        </>
      ) : (
        <>
          <h2 className="warning">Você ainda não possui nenhum lançamento</h2>
          <li className="card-empty">
            <div className="big-empty"></div>
            <div className="small-empty"></div>
          </li>
          <li className="card-empty">
            <div className="big-empty"></div>
            <div className="small-empty"></div>
          </li>
          <li className="card-empty">
            <div className="big-empty"></div>
            <div className="small-empty"></div>
          </li>
        </>
      )}
    </ul>
  );
};

export default List;
