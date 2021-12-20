import HomePage from './views/home/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WritePage from 'views/WritePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/write" element={<WritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
