import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import TodoList from "./pages/TodoList";

export const Router = ()=>{

    return (
        <BrowserRouter >
        {/* 배포시 BrowerRouter 에 추가해줘야함 => basename={process.env.PUBLIC_URL} */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/weather" element={<Weather />}/>
            <Route path="/todoList" element={<TodoList />}/>
          </Routes>
        </BrowserRouter>
    );
}