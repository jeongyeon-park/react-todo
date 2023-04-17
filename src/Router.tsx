import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import TodoList from "./pages/TodoList";

export const Router = ()=>{

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/weather" element={<Weather />}/>
            <Route path="/todoList" element={<TodoList />}/>
          </Routes>
        </BrowserRouter>
    );
}