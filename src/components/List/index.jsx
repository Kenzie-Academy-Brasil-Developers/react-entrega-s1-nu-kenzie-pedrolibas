import "./style.css";
import toast from "react-hot-toast";
import Card from "../Card";
import Empty from "../Empty";
import Filter from "../Filter";

const List = ({ arr, setArr, newArr, setNewArr }) => {
  function removeCard(id) {
    setArr((old) => old.filter((elem, index) => (index !== id ? elem : null)));
    setNewArr((old) =>
      old.filter((elem, index) => (index !== id ? elem : null))
    );
    toast.success("Lançamento removido com sucesso", {
      style: {
        color: "var(--color-pink)",
      },
    });
  }

  return (
    <ul>
      {newArr.length > 0 ? (
        <>
          <Filter newArr={newArr} setArr={setArr} />
          {arr.map((elem, index) => (
            <Card
              type={elem.type}
              description={elem.description}
              value={elem.value}
              removeCard={removeCard}
              index={index}
            />
          ))}
        </>
      ) : (
        <Empty />
      )}
    </ul>
  );
};

export default List;
