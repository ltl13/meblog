import HomePage from './views/home/homepage';

import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHomePage from 'views/userHomePage/userHomepage';

import YourStories from 'views/yourStories/yourStories';
import Login from './views/login/Login';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user" element={<UserHomePage />} />
          <Route exact path="/user/yourStories" element={<YourStories />} />
        </Routes>
      </div>
      <div>
        <Login />
      </div>
    </Router>
  );
}

export default App;
