
import './App.css';

// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionDashboard from './Component/Dasboard';
// import './index.css';

import './index.css';  // Ensure you have the CSS file imported
import Statistics from './Component/Statics';
import BarChartStats from './Component/TBarchart';

function App() {
  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<TransactionDashboard/>} />
          <Route path="/c" element={<Statistics/>} />
          <Route path="/tb" element={<BarChartStats/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
