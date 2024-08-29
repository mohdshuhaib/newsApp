import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
