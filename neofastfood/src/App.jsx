import { BrowserRouter, Routes, Route } from 'react-router';
import Welcome from './pages/welcome/Welcome';
import Menu from './pages/menu/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
