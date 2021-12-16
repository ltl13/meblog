import HomePage from "./views/home/homepage";
import { PostPage } from "./views/post/postpage";

import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/post" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
