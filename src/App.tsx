import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './routes/Dashboard';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <Routes>
          <Route path="/logged/dashboard" element={<DashboardPage />} />
          {/* Otras rutas pueden ir aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
