import { useState } from "react";
import { FiCheckSquare, FiTrash } from "react-icons/fi";

interface ITaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<ITaskProps[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleCreateNewTask = () => {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks((valorAntigo) => [...valorAntigo, newTask]);
    setNewTaskTitle("");
  };

  return (
    <section>
      <header className="flex flex-col justify-between sm:flex-row">
        <div className="flex items-center flex-1 h-auto mb-2 sm:mb-0">
          <h2 className="text-2xl font-semibold text-gray-600">Minhas Tasks</h2>
        </div>
        <div className="flex gap-2 md:flex-1">
          <input
            type="text"
            className="w-full px-2 py-2 text-gray-600 rounded-lg shadow-sm focus:ring-gray-400 bg-slate-100 focus:outline-none focus:ring-2"
            placeholder="Anote sua tarefa"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
            required
          />
          <button
            className="p-3 text-xl text-white bg-green-500 rounded-lg"
            type="submit"
            onClick={handleCreateNewTask}
          >
            <FiCheckSquare />
          </button>
        </div>
      </header>
      <main className="mt-4">
        <ul>
          {tasks.map((task) => (

            <li key={task.id} className="flex justify-between pb-4 mt-1 border-b-2 border-gray-100">
            <label>
              <input type="checkbox" />
              <span className="ml-2 text-gray-600">{task.title}</span>
            </label>
            <button type="button">
              <FiTrash size={14} color={"#ef5350"} />
            </button>
          </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default TaskList;
