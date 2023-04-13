import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import InputName from './components/InputName';
import Home from './pages/Home';
import Weather from './pages/Weather';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/weather" element={<Weather/>}></Route>
          <Route path='/todoList' element={<TodoList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
