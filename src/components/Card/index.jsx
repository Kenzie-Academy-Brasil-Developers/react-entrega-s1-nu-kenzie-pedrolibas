import { BsTrash } from "react-icons/bs";
import "./style.css";
import { motion } from "framer-motion";

const Card = ({ type, description, value, removeCard, index }) => (
  <motion.li
    className="card"
    style={{
      borderLeft: type === "Entrada" ? "5px solid green" : "5px solid grey",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="info-card">
      <h2 className="title-card">{description}</h2>
      <span className="value-card">R$ {value}</span>
      <div className="remove">
        <button className="remove-card" onClick={() => removeCard(index)}>
          <BsTrash size={16} />
        </button>
      </div>
    </div>
    <div className="type-span">
      <span className="type-card">{type}</span>
    </div>
  </motion.li>
);

export default Card;
