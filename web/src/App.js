import HomePage from './views/home/homepage';

import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHomePage from 'views/userHomePage/userHomepage';
import Login from './views/login/Login';
import Signup from 'views/signup/Signup';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user" element={<UserHomePage />} />
        </Routes>
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Signup />
      </div>
    </Router>
  );
}

export default App;
