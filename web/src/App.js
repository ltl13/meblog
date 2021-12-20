import HomePage from './views/home/homepage';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import WritePage from 'views/WritePage';
import UserHomePage from 'views/userHomePage/userHomepage';
import YourList from 'views/YourList/YourList';

import YourStories from 'views/yourStories/yourStories';
import Login from './views/login/Login';
import Signup from 'views/signup/Signup';
import Settings from 'views/Setting/Seting';
import PageNotFound from 'views/PageNotFound';
import ReadPage from 'views/ReadPage';
import ListView from 'views/ListView/ListView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user" element={<UserHomePage />} />
          <Route exact path="/me" element={<YourList />} />
          <Route exact path="/user/yourStories" element={<YourStories />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/write" element={<WritePage />} />
          <Route exact path="/404" element={<PageNotFound />} />
          <Route exact path="/:user/:post" element={<ReadPage />} />
          <Route path="/list/:id" element={<ListView />} />
          {/* <Route exact path="/:user" element={<ReadPage />} /> */}

          <Route
            exact
            path="*"
            element={<Navigate to="404" replace={true} />}
          />
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
