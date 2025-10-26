import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./views/to-do-list.jsx";
import TaskList from "./views/task-list.jsx";
import NavBar from "./components/navbar.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/TaskList" element={<TaskList />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
