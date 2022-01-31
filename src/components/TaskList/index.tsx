import { FiTrash, FiCheckSquare } from "react-icons/fi";
const TaskList: React.FC = () => {
  return (
    <section>
      <header className="flex flex-col justify-between sm:flex-row">
        <div className="flex items-center flex-1 h-auto mb-2 sm:mb-0">
          <h2 className="text-2xl font-semibold text-gray-600">Minhas Tasks</h2>
        </div>
        <div className="flex md:flex-1 md:mx-4">
          <input
            type="text"
            className="flex-1 px-3 py-2 text-gray-600 rounded-lg shadow-sm focus:ring-gray-400 bg-slate-200 focus:outline-none focus:ring-2"
            placeholder="Anote sua tarefa"
          />
          <button
            className="p-3 ml-2 text-xl text-white bg-green-500 rounded-lg"
            type="submit"
          >
            <FiCheckSquare />
          </button>
        </div>
      </header>
      <main className="mt-4">
        <ul>
          <li>comprar pão</li>
        </ul>
      </main>
    </section>
  );
};

export default TaskList;
