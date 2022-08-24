import "./style.css";
import { motion } from "framer-motion";

const TotalValue = ({ arr }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
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
    </motion.div>
  );
};

export default TotalValue;
