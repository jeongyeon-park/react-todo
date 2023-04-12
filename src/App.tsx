import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import InputName from './components/InputName';
import Home from './pages/home/Home';
import Whether from './pages/whether/Whether';
import TodoList from './pages/todoList/TodoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/whether" element={<Whether/>}></Route>
          <Route path='/todoList' element={<TodoList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
