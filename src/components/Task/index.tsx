import { FiTrash } from "react-icons/fi";

const Task: React.FC = () => {
  return (
    <li className="flex justify-between pb-4 mt-1 border-b-2 border-gray-100">
      <label>
        <input type="checkbox" />
        <span className="ml-2 text-gray-600">Comprar Pão</span>
      </label>
      <button>
        <FiTrash size={14} color={"#ef5350"} />
      </button>
    </li>
  );
};

export default Task;
