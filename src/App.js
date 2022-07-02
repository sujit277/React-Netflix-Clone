import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/signup/signup';
import Login from './components/login/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
