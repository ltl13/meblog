import HomePage from './views/home/homepage';

import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHomePage from 'views/userHomePage/userHomepage';
import YourList from 'views/YourList/YourList';

import YourStories from 'views/yourStories/yourStories';
import Login from './views/login/Login';
import Signup from 'views/signup/Signup';
import Settings from 'views/Setting/Seting';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user" element={<UserHomePage />} />
          <Route exact path="/me" element={<YourList />} />
          <Route exact path="/user/yourStories" element={<YourStories />} />
          <Route exact path="/settings" element={<Settings />} />
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
