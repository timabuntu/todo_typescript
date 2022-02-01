import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex items-center justify-center h-48 bg-blue-700">
        <Header />
      </div>
      <div className="container p-4 pt-8 mx-auto -mt-16 bg-white shadow-sm sm:rounded-lg">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
