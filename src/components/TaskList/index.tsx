import { useState } from "react";
import { FiCheckSquare, FiTrash } from "react-icons/fi";

interface ITask {
  id: number;
  title: string;
  isComplete: boolean;
}

const TaskList: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  // Criar um state, e passar esse state ao input

  const handleNewTask = () => {
    if (!taskTitle) return;

    const newTask = {
      id: Math.random(),
      title: taskTitle,
      isComplete: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    setTaskTitle("");
  };

  const handleRemoveTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  };

  const handleToggleTaskCompletion = (id: number) => {

    const newTaskToggle = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task)

    setTasks(newTaskToggle)

  }

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
            onChange={(e) => setTaskTitle(e.target.value)}
            value={taskTitle}
            required
          />
          <button
            className="p-3 text-xl text-white bg-green-500 rounded-lg"
            type="submit"
            onClick={handleNewTask}
          >
            <FiCheckSquare />
          </button>
        </div>
      </header>
      <main className="mt-4">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between pb-4 mt-1 border-b-2 border-gray-100"
            >
              <label>
                <input type="checkbox" readOnly checked={task.isComplete} onClick={()=>handleToggleTaskCompletion(task.id)} />
                <span
                  className={
                    task.isComplete
                      ? "line-through ml-2 text-gray-400"
                      : "ml-2 text-gray-600"
                  }
                >
                  {task.title}
                </span>
              </label>
              <button type="button" onClick={() => handleRemoveTask(task.id)}>
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
