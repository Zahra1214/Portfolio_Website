import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Index from './components/Index';
import Projects from './components/project';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar name="Zahra" age="24" email="ham@gmail" song="This is song"/>}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact-us" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
