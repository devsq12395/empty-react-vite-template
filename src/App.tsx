import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProviders from './contexts/ContextProviders';
import GlobalScript from './components/common/GlobalScript';
import './index.css';

import Sample from './routes/Sample';

const frameworkVersion = '1.2';

function AppRoutes() {
  console.log('Created with SQ Framework Version:', frameworkVersion);
  return (
    <Routes>
      <Route path="/" element={<Sample />} />
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
