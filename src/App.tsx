import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProviders from './contexts/ContextProviders';
import GlobalScript from './components/common/GlobalScript';
import './index.css';

import Home from './routes/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ContextProviders>
        <GlobalScript>
          <AppRoutes />
        </GlobalScript>
      </ContextProviders>
    </Router>
  );
}

export default App;
