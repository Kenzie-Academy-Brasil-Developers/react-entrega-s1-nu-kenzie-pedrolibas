import { useState } from "react";
import "./style.css";
import toast from "react-hot-toast"

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
      toast.success("Lançamento realizado com sucesso", {
        style: {
          color: "var(--color-pink)"
        }
      })
    } else {
      toast.error("Por favor preencha todos os campos!", {
        style: {
          color: "var(--color-pink)"
        }
      })
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
              <p className="number">R$</p>
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
