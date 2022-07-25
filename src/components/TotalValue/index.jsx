import "./style.css";

const TotalValue = ({ arr }) => {
  return (
    <div className="general-value">
      <div className="conteiner-value">
        <h2 className="title-value">Valor Total</h2>
        <p className="p-value">
          $
          {arr.reduce((acc, atual) => {
            return atual.type === "Entrada"
              ? acc + parseInt(atual.value)
              : acc - parseInt(atual.value);
          }, 0)}
        </p>
      </div>
      <span className="span-value">O valor se refere ao saldo</span>
    </div>
  );
};

export default TotalValue;
