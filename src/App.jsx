import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Layout from './pages/layout';
import './index.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <Routes>
      <Analytics />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
