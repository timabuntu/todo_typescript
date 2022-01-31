import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex items-center justify-center h-48 bg-blue-400">
        <Header />
      </div>
      <div className="container mx-auto bg-gray-300">
        <h1>main</h1>
      </div>
    </div>
  );
};

export default App;
