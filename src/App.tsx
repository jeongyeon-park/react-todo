import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/weather" element={<Weather />}/>
            <Route path="/todoList" element={<TodoList />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
