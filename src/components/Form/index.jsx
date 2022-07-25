import { useState } from "react";
import "./style.css";

const Form = ({ setArr, setNewArr }) => {
  const [all, setAll] = useState({ type: "Entrada" });

  function createCard() {
    if (
      all.description !== undefined &&
      all.value !== undefined &&
      all.description !== "" &&
      all.value !== ""
    ) {
      setArr((old) => [...old, all]);
      setNewArr((old) => [...old, all]);
    }
  }

  return (
    <div className="form">
      <form onSubmit={(e) => createCard(e.preventDefault())}>
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Ex.: Compra de roupas"
          onChange={(e) => setAll({ ...all, description: e.target.value })}
        />
        <div className="values">
          <div className="value">
            <label>Valor</label>
            <div className="value__info">
              <input
                type="number"
                id="number"
                onChange={(e) => setAll({ ...all, value: e.target.value })}
              />
              <span className="number">R$</span>
            </div>
          </div>
          <div className="type__value">
            <label>Tipo de valor</label>
            <select onChange={(e) => setAll({ ...all, type: e.target.value })}>
              <option defaultValue="Entrada">Entrada</option>
              <option defaultValue="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button type="submit" className="button__value">
          Inserir valor
        </button>
      </form>
    </div>
  );
};

export default Form;
